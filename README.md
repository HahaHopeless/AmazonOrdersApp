## About this app
This is a simple CRUD app for managing orders on Amazon. It was built for learning purposes just to get a hands-on experience in React Native, Node.js and get to know how things work in JavaScript.
Feel free to clone this app, modify it or use parts of it. Doesnt matter if you use them commercially or just for fun, it would be great if it helps you out as much as possible.


## Errors and their fixes:
These are all the errors I encountered while developing this application. The errors you get might be different depending on the version of the packages you are using.

#### React Navigation Dependencies:
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-navigation-stack @react-native-community/masked-view

#### Native Base Roboto Medium Fix:
Font.loadAsync({
   Roboto: require("native-base/Fonts/Roboto.ttf"),
   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
 });

#### Native Base Fontisto error fix: 
npm i --save-exact native-base@2.13.8

#### Move from Expo to Bare workflow (to get all files like build.gradle and more for android and iOS):
expo eject
NOTE: Also, make sure that JAVA_HOME and ANDROID_HOME environment variables are set correctly.

react-native-gradient issue in Bare workflow:
Delete react-native-gradient from node_modules and remove it from packages.json. Instead, install expo-linear-gradient

Things to keep in mind while making notifications:
Install firebase, gcm, react-native-push-notification

App level build.gradle (android->app->src/main->build.gradle) must have dependencies:
implementation project(':react-native-firebase')
implementation project(':react-native-push-notification')
implementation "com.google.android.gms:play-services-base:16.1.0"
implementation "com.google.firebase:firebase-core:16.0.9"
implementation "com.google.firebase:firebase-messaging:19.0.0"
apply plugin: 'com.google.gms.google-services' //this line should be at the end of the file

Project level build.gradle (android->build.gradle) must have the following dependencies:
classpath 'com.android.tools.build:gradle:3.3.0'
        	classpath 'com.google.gms:google-services:4.2.0' //Works FINE

Make sure it's "react-native-push-notification": "^3.1.9" in packages.json and no other version.

Make sure to replace the keyword AppID or AndroidAppID with your own app package name in “AndroidManifest.xml”.
