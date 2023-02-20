#!/usr/bin/env bash

APP=pass-Culture/passculture-testing-android
LATEST_RELEASE_ID=$(appcenter distribute releases list --app ${APP} --output json | jq '.[0].id')

appcenter distribute releases edit --app ${APP} --release-id ${LATEST_RELEASE_ID} disabled
