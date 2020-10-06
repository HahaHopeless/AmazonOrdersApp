import React, { Component } from "react";
import Drawer from "./src/routes/Drawer";
import PushController from "./src/components/PushController";
import { View } from "react-native";
import PushNotification from "react-native-push-notification";
import firebase from "react-native-firebase";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
export default class App extends Component {
  componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log("received");
        console.log("NOTIFICATION:", notification);

        // process the notification here

        // required on iOS only
        //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // Android only
      senderID: "365740238845",
      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  render() {
    return <Drawer />;
  }
}
