#!/bin/bash

set -ex

DIR=$(dirname "$0")
DOCKER_COMPOSE_PATH="${DIR}/../docker-compose.yml"

docker-compose -f $DOCKER_COMPOSE_PATH down
docker-compose -f $DOCKER_COMPOSE_PATH up -d
