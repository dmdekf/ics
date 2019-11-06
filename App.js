import React from "react"; // 반드시 존재해야한다.
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
import ShareExample from "./src/components/ShareExample";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/components/MainScreen";
import { WebView } from "react-native-webview";
import WebViewExample from "./src/components/WebViewExample";
import { Dimensions } from "react-native";
// Component import

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: WebViewExample // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);
