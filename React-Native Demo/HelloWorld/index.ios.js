/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
  第一部分

  倒入ReactNative 包，导入ReactNative zujian

  AppRegistry: JS 运行所噢与ReactNative 应用的入口
  StyleSheet: ReactNative 中使用的样式表，类似CSS 样式表

  各种开发中需要使用的组件

  模板中国使用的是ES6 的语法, ES5  语法如下：

  let React = require("react-native");
  let{
    AppRegistry,
    StyleSheet,
    Text,
    View
  } = React;

  require 函数，搜索目录家在文件
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
