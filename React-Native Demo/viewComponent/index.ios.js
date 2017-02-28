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
      <View style={[demoStyles.flex,demoStyles.container]}>
        <View style={demoStyles.item}>
          <View style={[demoStyles.flex,demoStyles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[demoStyles.flex,demoStyles.lineLeftRight]}>
            <View style={[demoStyles.flex,demoStyles.center,demoStyles.lineCenter]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[demoStyles.flex,demoStyles.center]}>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={demoStyles.flex}>
            <View style={[demoStyles.flex,demoStyles.center,demoStyles.lineCenter]}>
              <Text>团购</Text>
            </View>
            <View style={[demoStyles.flex,demoStyles.center]}>
              <Text>民宿 客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

// color 属性只能用于text。
// 不存存在继承关系

var demoStyles = StyleSheet.create({
  container: {
    marginTop:25,
    backgroundColor:"#f2f2f2"
  },
  // 多个子组件都需要设置
  flex: {
    flex:1
  },
  center:{
    justifyContent:"center",
    alignItems:"center"
  },
  item:{
    flexDirection:"row",
    backgroundColor:"#ff607c",
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    height:80,
    borderRadius:5
  },
  // 给中间的区域设置左右边线
  lineLeftRight:{
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:"white"
  },
  // 给上半区域设置下边线
  lineCenter:{
    borderBottomWidth:1,
    borderColor:"white"
  }
});

AppRegistry.registerComponent('viewComponent', () => viewComponent);
