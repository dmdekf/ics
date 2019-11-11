import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
export default class ActionBarImage extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
 
            <Image
              source={require('../../assets/profile.jpg')}
              style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
            />
     
          </View>
        )
    }
}
