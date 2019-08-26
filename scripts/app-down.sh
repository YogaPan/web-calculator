#!/bin/bash

set -ex

# Setup environment
DIR=$(dirname "$0")
DOCKER_COMPOSEPATH="${DIR}/../docker-compose.yml"

docker-compose -f $DOCKER_COMPOSEPATH down
