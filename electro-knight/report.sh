#!/usr/bin/env bash
CID=(docker ps -l -q)
docker cp $CID:/tmp/report .