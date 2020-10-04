import React, { useEffect } from "react";
import Drawer from "./src/routes/Drawer";
// import Notifications from "expo";
// import Permissions from "expo";
// import Constants from "expo-constants";
// import * as firebase from "firebase";

export default function App() {
  // useEffect(() => {
  //   (() => {
  //     registerForPushNotificationsAsync();
  //   })();
  // }, []);

  // if (!firebase.apps.length) {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyA9nEJLnvWIzdi0_4N60j_GQgqUBWY6rn0",
  //     authDomain: "amzrevs-e7a78.firebaseapp.com",
  //     databaseURL: "https://amzrevs-e7a78.firebaseio.com",
  //     projectId: "amzrevs-e7a78",
  //     storageBucket: "amzrevs-e7a78.appspot.com",
  //     messagingSenderId: "365740238845",
  //     appId: "1:365740238845:web:f527b29a2d89aa21349b94",
  //   });
  // }

  // const registerForPushNotificationsAsync = async () => {
  //   let token;
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Permissions.getAsync(
  //       Permissions.NOTIFICATIONS
  //     );
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Permissions.askAsync(
  //         Permissions.NOTIFICATIONS
  //       );
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       alert("Failed to get push token for push notification!");
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log(token);
  //   } else {
  //     alert("Must use physical device for Push Notifications");
  //   }

  //   if (token) {
  //     await firebase
  //       .firestore()
  //       .collection("users")
  //       .doc(firebase.auth().currentUser.uid)
  //       .set({ token }, { merge: true });
  //   }

  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   console.log("The TOKEN for FIREBASE is:" + token);
  // };

  return <Drawer />;
}
