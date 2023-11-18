#!/bin/bash

npm run build

cp src/package.json dist

cd dist

npm i --omit=dev

cd ..

sam build

sam deploy
