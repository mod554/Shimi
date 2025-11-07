#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Installing deps..."
npm install
echo "Building..."
npm run build
echo "Done. Open ./dist/index.html"
