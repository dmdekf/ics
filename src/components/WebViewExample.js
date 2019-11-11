import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  Platform,
  Share
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";
import ActionBarImage from "./ActionBarImage";
import { ScrollView } from "react-native-gesture-handler";
export default class WebViewExample extends Component {
  static navigationOptions = {
    // headerLeft: (
    //   <Ionicons name={"ios-share-alt"} size={35} color={"lightblue"} />
    // ),
    headerTitle: "I AM BRAND",
    headerLeft: <ActionBarImage />,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#8FBFF6"
    }
    // headerRight: (
    //   <Ionicons name={"ios-share-alt"} size={35} color={"lightblue"} />
    // )
  };
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ height: 250 }}>
            <WebView
              style={styles.WebViewContainer}
              style={{ flex: 1 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: "https://www.youtube.com/embed/3BMMqQ4C2B8" }}
              Zs
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 75,
              left: 350,
              right: 30,
              bottom: 75,
              justifyContent: "center",
              alignItems: "flex-end"
              // backgroundColor: "#fff"
            }}
          >
            <TouchableOpacity
              onPress={() => Linking.openURL("http://facebook.com")}
            >
              <Ionicons name={"ios-share-alt"} size={35} color={"#8FBFF6"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Shopscreen")}
            >
              <Ionicons name={"ios-cart"} size={35} color={"#8FBFF6"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onShare}>
              <Ionicons name={"ios-share"} size={35} color={"#8FBFF6"} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ height: 250 }}>
            <WebView
              style={styles.WebViewContainer}
              style={{ flex: 1 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: "https://www.youtube.com/embed/bQWw8s2Vxug" }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 75,
              left: 350,
              right: 30,
              bottom: 75,
              justifyContent: "center",
              alignItems: "flex-end"
              // backgroundColor: "#fff"
            }}
          >
            <TouchableOpacity
              onPress={() => Linking.openURL("http://facebook.com")}
            >
              <Ionicons name={"ios-share-alt"} size={35} color={"#8FBFF6"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Shopscreen")}
            >
              <Ionicons name={"ios-cart"} size={35} color={"#8FBFF6"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onShare}>
              <Ionicons name={"ios-share"} size={35} color={"#8FBFF6"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: Platform.OS == "ios" ? 20 : 1
  }
  // width: "100%",
  // resizeMode: "contain"
});
