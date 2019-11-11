import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { WebView } from "react-native-webview";

class shop extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          originWhitelist={["*"]}
          style={{ flex: 1 }}
          source={{
            uri:
              "file:///Users/tech/Desktop/iambrandproject/iambrand/src/screens/shophtml.html"
          }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
        />
      </View>
    );
  }
}
export default shop;
