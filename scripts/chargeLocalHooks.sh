#!/bin/sh

echo "create local git hooks"

set -e

if [ ! -d ./.git/hooks ]; then
  echo "no tenes creada la carpeta hooks"
  exit 1
fi


if [ ! -f ./scripts/hooks/pre-push ]; then
  echo "no se encontro el hook \"pre-push\""
  exit 1
fi

if [ ! -f ./scripts/hooks/pre-commit ]; then
  echo "no se encontro el hook \"pre-commit\""
  exit 1
fi

hook_error() {
  echo "chargeLocalHooks error"
  exit 1
}

permition_error() {
  echo "permition error"
  exit 1
}

echo "assing hooks"

cp ./scripts/hooks/pre-commit ./.git/hooks || hook_error
cp ./scripts/hooks/pre-push ./.git/hooks || hook_error

echo "assing permitions"

chmod u+x ./.git/hooks/pre-commit || permition_error
chmod u+x ./.git/hooks/pre-push || permition_error

echo "success :D!"
