#!/usr/bin/env bash

set -e

if [ $# -lt 2 ]; then
  echo >&2 "Svg file and/or component name missing!"
  exit 1
fi

yarn -s svgr $1 >src/ui/svg/icons/$2.tsx
