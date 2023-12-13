#!/bin/bash

# Check if .env file exists
if [ ! -f .env ]; then
    echo ".env file not found. Creating from .env.example..."
    cp .env.example .env
else
    echo ".env file already exists."
fi

# Build and Run the Docker Container
docker build -t eurogamer-client .
docker run -it -p 3001:3001 eurogamer-client