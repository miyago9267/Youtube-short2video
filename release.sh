#!/bin/bash

set -e

NAME=$(grep '"name":' manifest.json | sed -E 's/.*"([^"]+)".*/\1/')
VERSION=$(grep '"version":' manifest.json | sed -E 's/.*"([0-9]+\.[0-9]+\.[0-9]+)".*/\1/')
ZIP_NAME="${NAME}_v${VERSION}.zip"

rm -rf dist
yarn build
cp manifest.json dist/manifest.json
cp -r public/* dist/*

cd dist
zip -r "../$ZIP_NAME" ./*
cd ..

echo "Release package created: $ZIP_NAME"