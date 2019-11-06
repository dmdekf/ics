import React, { Component } from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default class MyWeb extends Component {
  render() {
    return (
      <View>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/QmgcyLozkbQ" }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}
