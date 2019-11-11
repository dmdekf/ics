import React, { Component } from "react";
import { Share, Button, View, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

class ShareExample extends Component {
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
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute"
        }}
      >
        <TouchableOpacity onPress={this.onShare}>
          <Ionicons name={"ios-share"} size={35} color={"red"} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ShareExample;
