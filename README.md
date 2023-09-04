![GitHub watchers](https://img.shields.io/github/watchers/ny-daystar/bassora)
![GitHub forks](https://img.shields.io/github/forks/ny-daystar/bassora)
![GitHub Repo stars](https://img.shields.io/github/stars/ny-daystar/bassora)
![GitHub repo size](https://img.shields.io/github/repo-size/ny-daystar/bassora)
![GitHub language count](https://img.shields.io/github/languages/count/ny-daystar/bassora)
![GitHub top language](https://img.shields.io/github/languages/top/ny-daystar/bassora) <a href="https://codeclimate.com/github/ny-daystar/bassora/maintainability"><img src="https://api.codeclimate.com/v1/badges/715c6f3ffb08de5ca621/maintainability" /></a>  
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/ny-daystar/bassora/newArchitecture)
![GitHub issues](https://img.shields.io/github/issues/ny-daystar/bassora)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/ny-daystar/bassora)
![GitHub](https://img.shields.io/github/license/ny-daystar/bassora)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-blue.svg?style=circular)](#contributors)

![Android](https://img.shields.io/badge/Android-3DDC84?style=flat&logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?style=flat&logo=ios&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23323330.svg?style=flat&logo=typescript&logoColor=%23F7DF1E)

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)

# Bassora

React-Native project to create time-sheet in a day (efficitent time & breaking time)

## Summary

- [Environment](#environment)
- [Prerequisites](#prerequisites)
- [For Developper](#for-developper)
- [Compilation](#compilation)
- [Shortcuts on Android Emulateur](#shortcuts-on-android-emulateur)
- [Documentation](#documentation)

## Environment

- Windows 10
- Git bash
- [`choco`](https://chocolatey.org/)

## Prerequisites

- [JDK 11](https://www.oracle.com/fr/java/technologies/downloads/)
- [`npm` & `nvm`](npm => v9.7.1 & node => v20.3.1 )
- [Android Studio](https://developer.android.com/studio)
  - Configure a device with `Virtual Device Manager`
  - `SDK` => version 33
  - `build-tools & platform-tools` => v33.0.0
- `adb.exe` (Android Debug Bridge)
  - Automatically installed with Android Studio or SDK

## For Developper

0. Clone the repository

```bash
git clone git@github.com:NY-Daystar/Bassora.git
```

1. Configure your environment [following this tutorial](https://reactnative.dev/docs/environment-setup?guide=native)

   - Install Android Studio
     - Configure SDK (Version 33)
     - Install `sdk platform` and `sdk tools` in 33.0.0
     - Setup `Environment variables`
       - `JAVA_HOME` : Path to `JDK 11`
       - `ANDROID_HOME` : Path to `SDK 33`

2. To verify if all is well installed

```bash
`npx react-native doctor`
```

3. Install dependencies

```bash
`npm install`
```

4. To launch the app :

From `Metro`

```bash
npm start
# "react-native start log-android"

# Then press `a` to run on Android
```

Or with Android Command - Compile project on every devices (emulator and physical devices)

```bash
npm run android
# "react-native run-android log-android"
```

Other commands: `npx react-native run-android`

[To setup new icons with `FontAwesome`](https://fontawesome.com/docs/web/use-with/react-native)

5. Install `react-devtools` packages

```bash
npm install -g react-devtools
```

6. Launch `react devtools`. Need to reload the app with `Ctrl+M`

```bash
react-devtools.cmd
```

## Tests unitaires

TODO

## Compilation

TODO

TODO : Trouver la commande react-native pour build le fichier apk (android package kit)

- POUR INSTALLER SUR MON TELEPHONE
  - Activer mode developper
  - Connecter en debogage usb
  - verifier que c'est connecter : `adb devices`
  - pour lancer l'install: `adb -s <DEVICE_ID> install .\build\app\outputs\flutter-apk\app-release.apk`

TODO mettre la doc pour voir comment activer le mode developpeur du telephone
TODO mettre la doc pour voir comment mettre son application sur le telephone

## Shortcuts on Android Emulateur

- `Ctrl+M` to get setting on device avoir les settings du device
  - Element insepector
  - performance monitor

## Documentation

- https://reactnative.dev/docs/environment-setup?guide=native
- https://reactnativeelements.com/
- https://reactnative.dev/docs/components-and-apis
- https://fontawesome.com/docs/web/use-with/react-native
