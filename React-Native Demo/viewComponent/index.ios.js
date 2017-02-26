/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var viewComponent = React.createClass({
  render: function(){
    return (
      <View style={demoStyles.container}>
        <View>
          <View>
            <Text>酒店</Text>
          </View>
          <View>
            <View>
              <Text>海外酒店</Text>
            </View>
            <View>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>团购</Text>
            </View>
            <View>
              <Text>民宿 客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

var demoStyles = StyleSheet.create.({
  container: {
    marginTop:25,
    backgroundColor:"#f2f2f2"，
    textAlign:"center"
  },
  // 多个子组件都需要设置
  flex: {
    flex:1
  },
  center:{
    justifyContent:"cneter",
    alignItems:"center"
  },
  item:{
    flexDirection:"row",
    backgroundColor:"#ff607c",
    marginTop:5,
    margomLeft:5,
    marginRight:5,
    height:80,
    borderRadius:5
  }
});

AppRegistry.registerComponent('viewComponent', () => viewComponent);
