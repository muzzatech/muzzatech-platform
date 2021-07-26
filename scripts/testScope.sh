#!/bin/sh

read -p "enter name package: " PACKAGE 

echo "Execute test $PACKAGE"

error() {
  echo "error - $PACKAGE"
  exit 1
}

COMPLETE_PKG="@muzzatech/$PACKAGE"

lerna run test --scope $COMPLETE_PKG || error
