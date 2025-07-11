#!/bin/bash

set -e  

trap 'echo "Error occurred on line $LINENO. Exiting."; exit 1' ERR

# Go to the root directory from /scripts
cd ..

echo "Building packages/utils..."
cd packages/utils
npm install
npm run build
cd - > /dev/null

echo "Building packages/validator..."
cd packages/validator
npm install
npm run build
cd - > /dev/null

echo "Building backend..."
cd backend
npm install
npm run build
cd - > /dev/null

echo "Building client..."
cd client
npm install
npm run build
cd - > /dev/null

echo "All builds completed successfully!"
