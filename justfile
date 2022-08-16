default:
  @just --choose

help:
  @just --list

build:
  docker build -f Dockerfile -t localhost/sarchart

run:
  docker run --name sarchart -d -p 3000:3000 localhost/sarchart

stop:
  docker stop sarchart

clean:
  docker stop sarchart
  docker rm sarchart
  docker rmi localhost/sarchart
