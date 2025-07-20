# Base Stage
FROM node:18-alpine AS base
WORKDIR /app
COPY backend/package*.json ./backend/

# Builder Stage
FROM base AS builder
WORKDIR /app

# Copy backend and packages
COPY backend ./backend
COPY packages ./packages

# Install and build packages
WORKDIR /app/packages/utils
RUN npm install && npm run build

WORKDIR /app/packages/validator
RUN npm install && npm run build

# Build backend
WORKDIR /app/backend
RUN npm install
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm run build

# Development Stage
FROM base AS dev
WORKDIR /app
COPY backend ./backend
COPY packages ./packages

WORKDIR /app/backend
RUN npm install
RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 5000
CMD ["npm", "run", "dev"]

# Production Stage
FROM node:18-alpine AS production
WORKDIR /app

# Copy built backend and built packages only
COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/package*.json ./
COPY --from=builder /app/packages/utils/dist ./packages/utils/dist
COPY --from=builder /app/packages/validator/dist ./packages/validator/dist

# Install only backend production deps
RUN npm install --omit=dev

EXPOSE 5000
CMD ["npm", "run", "start"]
