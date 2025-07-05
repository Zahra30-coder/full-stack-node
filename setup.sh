#!/bin/bash

echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ All dependencies installed!"
