#!/usr/bin/env bash

npm run fmt
npm run tsc
npm run lint

message=$1

git add .
git commit -m "$1"
git push
