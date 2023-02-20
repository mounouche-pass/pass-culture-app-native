# TODO

## Links

- [PC-19996](https://passculture.atlassian.net/browse/PC-19996)
- [MobTime](https://mobtime.hadrienmp.fr/mob/Pass-culture)

---

## Tasks

1. [x] màj la version du package.json
   - avec `fake-X.Y.Z`
2. [x] commit
3. [x] mettre un tag
4. [x] push le tag
5. [x] dans la pipeline trigger un job particulier "deploy-custom-ios-testing-hard" dans la partie workflows pour voir [Créer une version custom de l’app sur App Center](https://www.notion.so/passcultureapp/Cr-er-une-version-custom-de-l-app-sur-App-Center-836bffb7b19643e4a8fe6de6968191a1)
    a. [x] deploy sur AppCenter
    b. [x] ne pas lancer les tests
    c. ~~disable la version sur AppCenter ?~~ plus tard
    https://github.com/microsoft/appcenter-cli -> `appcenter distribute releases edit` => Toggles enabling and disabling the specified release
   <!-- https://appcenter.ms/orgs/pass-Culture/apps/passculture-testing-android/distribute/releases?top=false -->
6. [ ] Améliorer le script appcenter-disable-... pour donner une option ios ou android et récupérer le bon app-id
7. [ ] Créer un job dans la CI qui appellera ce script

exemple :
deploy-custom-ios-testing-hard:
filters:
tags:
only: /^fake\/v._/
branches:
ignore: /._/
requires: - checkout-and-install-deps

Dans deploy.sh rajouter la condition :
if [[$CURRENT_TAG =~ fake....$HARD_DEPLOY_TESTING_TAG_REGEX]]; then
success "Not on master but tag found. Deploying to $APP_ENV."

---

## Tasks for another US

- [ ] tout pareil pour staging
    appcenter distribute releases list --app pass-Culture/passculture-testing-android --output json > result.json
    appcenter distribute releases list --help
<!-- cat result.json | jq '.[0].id' -->

appcenter distribute releases edit --app pass-Culture/passculture-testing-android --release-id $(appcenter distribute releases list --app pass-Culture/passculture-testing-android --output json | jq '.[0].id') disabled
