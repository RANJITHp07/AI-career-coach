# Base Stage
FROM node:18-slim AS base
WORKDIR /app
COPY client/package*.json ./client/

# Builder Stage
FROM base AS builder
WORKDIR /app

# Copy client and shared packages
COPY client ./client
COPY packages ./packages

# Build shared packages
WORKDIR /app/packages/utils
RUN npm install && npm run build

WORKDIR /app/packages/validator
RUN npm install && npm run build

# Build client
WORKDIR /app/client
RUN npm install
RUN npm run build

# Development Stage
FROM base AS dev
WORKDIR /app

COPY client ./client
COPY packages ./packages

WORKDIR /app/client
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production Stage
FROM node:18-slim AS production
WORKDIR /app

COPY --from=builder /app/client/public ./public
COPY --from=builder /app/client/.next ./.next
COPY --from=builder /app/client/package*.json ./
COPY --from=builder /app/packages/utils/dist ./packages/utils/dist
COPY --from=builder /app/packages/validator/dist ./packages/validator/dist

RUN npm install --omit=dev

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
