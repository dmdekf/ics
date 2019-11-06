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
import ShareExample from "./ShareExample";
import { Linking } from "react-native";
export default class MainScreen extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          position: "absolute"
        }}
      >
        <Text>Open up App.js to start working on your app!</Text>

        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://facebook.com")}
          >
            <Ionicons name={"ios-share-alt"} size={35} color={"blue"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("http://google.com")}
          >
            <Ionicons name={"ios-cart"} size={35} color={"blue"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
