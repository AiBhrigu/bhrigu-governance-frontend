#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Building project..."
# Если есть сборка — например Vite, Next или Svelte — вставь команду сюда:
# Например: npm run build

echo "Pushing to GitHub..."
git add .
git commit -m "Auto deploy"
git push
