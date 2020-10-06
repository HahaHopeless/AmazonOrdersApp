import React, { Component } from "react";
import PushNotification from "react-native-push-notification";
import firebase from "react-native-firebase";

export default class PushController extends Component {
  componentDidMount() {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      requestPermissions: Platform.OS === "ios",
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
    return null;
  }
}
