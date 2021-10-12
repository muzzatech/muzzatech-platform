#!/bin/sh

set -e

if [ ! -d ./config ]; then
  echo "Create config folder"
  mkdir config
fi

echo "Create file"
echo 'module.exports = { "db": { "port": 5432, "host": "localhost" }, "name": "testing" }' >> ./config/test.js

node_modules/.bin/jest || exit 1

echo "remove folder"
rm -rf ./config
