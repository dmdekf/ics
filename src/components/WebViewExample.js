import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Platform
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
export default class WebViewExample extends Component {
  static navigationOptions = {
    // headerLeft: (
    //   <Ionicons name={"ios-share-alt"} size={35} color={"lightblue"} />
    // ),
    title: "I AM Brand"
    // headerRight: (
    //   <Ionicons name={"ios-share-alt"} size={35} color={"lightblue"} />
    // )
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <WebView
            source={{
              html:
                '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9riAd3qxkpQ?&autoplay=1"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ,<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TNIc-5GyxZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 450,
            left: 350,
            right: 30,
            bottom: 450,
            justifyContent: "center",
            alignItems: "flex-end",
            backgroundColor: "#fff"
          }}
        >
          <TouchableOpacity
            onPress={() => Linking.openURL("http://facebook.com")}
          >
            <Ionicons name={"ios-share-alt"} size={35} color={"lightblue"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://google.com")}
          >
            <Ionicons name={"ios-cart"} size={35} color={"lightblue"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 1000

    // width: "100%",
    // resizeMode: "contain"
  }
});
