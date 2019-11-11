import React from "react"; // 반드시 존재해야한다.

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WebViewExample from "./src/components/WebViewExample";
import shop from "./src/components/shop";
// Component import

const AppStackNavigator = createStackNavigator(
  {
    Listscreen: WebViewExample,
    Shopscreen: shop // MainScreen 컴포넌트를 네비게이터에 등록
  },
  {
    initialRouteName: "Listscreen"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
