#! /bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

while getopts n:t:e:v:b: flag; do
  case "${flag}" in
  v) version=${OPTARG} ;;
  b) build=${OPTARG} ;;
  *)
    printf "***************************\n"
    printf "* Error: Invalid argument '$flag' .*\n"
    printf "***************************\n"
    exit 1
    ;;
  esac
done

if [ -z "$build" ]; then
  build="containers"
fi

printf "Building ccd with the $build mode...\n"

if [[ ${version} ]]; then
  docker build . -f Dockerfile.prod -t $version
else
  docker build . -f Dockerfile.prod -t ccdeuroservices:$env
fi
