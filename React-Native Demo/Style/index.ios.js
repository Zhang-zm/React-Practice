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

// ES5

// 定义组件
var StyleDemoComponent = React.createClass({
  render: function(){
    return (
      // 若有多个style, 则写成数组形式。靠后的会覆盖前面的样式
      // 不推荐内联样式
      <View style={demoStyleSheet.container}>
        <View style={[demoStyleSheet.top,demoStyleSheet.border]}></View>
        <View style={[demoStyleSheet.border,demoStyleSheet.bottom,{borderColor:"black"}]}></View>
      </View>
    );
  }
});

// 定义组件样式

/*
  1. StyleSheet.creat() 传入的参数是对象；
  2. key 需要用驼峰命名法；若value 为字符串，需要加 ""
  3. value 不带单位
*/

var demoStyleSheet = StyleSheet.create({
  // 外层View
  container: {
    marginTop: 25,
    marginLeft: 30,
    backgroundColor: "red",
    width: 300,
    height: 400
  },
  // 内层（上面一个View 组件）
  top: {
    backgroundColor: "green",
    width:280,
    height:250,
    marginTop:10,
    marginLeft:10,
    borderWidth: 3,
    borderColor: "black"
  },
  // 内层（下面一个View 组件）
  bottom: {
    backgroundColor: "blue",
    width: 280,
    height: 110,
    marginTop: 10,
    marginLeft:10,
    borderWidth: 5,
    borderColor: "white"
  },
  border: {
    borderWidth: 3,
    borderColor: "white"
  }
});

AppRegistry.registerComponent('Style', () => StyleDemoComponent);
