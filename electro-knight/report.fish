#! /usr/bin/fish
set CID (docker ps -l -q)
docker cp $CID:/tmp/report .