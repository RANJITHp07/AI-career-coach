#!/bin/bash

set -e
trap 'echo "Error occurred on line $LINENO. Exiting."; exit 1' ERR

# Go up to the root directory
cd ..

echo "Starting backend and client in development mode..."

# Run backend and client dev scripts in parallel
(cd backend && npm run dev) & 
(cd client && npm run dev) &

wait
