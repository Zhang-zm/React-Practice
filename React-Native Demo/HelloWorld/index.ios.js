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


/*
  第二部分

  创建ReactNative 组件

  模板中使用的是ES6 的语法，
  render(){} 是ES6 中国年函数的简写形式

  ES5 语法如下：

   var HelloWorld = React.createClass({
     render: function(){
      return {};
    }
  });

*/

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ZZM!
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

/*
  第三部分

  StyleSheet.create 创建样式实例

  在应用中只会被创建一次，不用每次在渲染周期中重新创建
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});

/*
  第四部分

  注册入口组件

  AppRegistry: 负责注册运行ReactNative 应用程序的JavaScript 入口registerComponent 注册应用程序的入口组件。告知ReactNative 哪一个组件备注称为应用的根容器。

  第二个参数使用了ES6 的语法 --- 尖头函数：
  () => HelloWorld
  返回的必须是定义的组件类的名字

  等价于：

  function(){return HelloWorld}
*/

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
