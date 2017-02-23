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

var DemoFlex = React.createClass({
  render: function(){
    return (
      <View style={demoStyles.container}>
        <View style={demoStyles.child1}></View>
        <View style={demoStyles.child2}></View>
      </View>
    )
  }
});

var demoStyles = StyleSheet.create({
  container:{
    margin: 30,
    width:300,
    height:500,
    backgroundColor:"yellow",

    // 默认主轴方向：纵向

    // 设置排列方式（主轴方向）为横向
    flexDirection: "row",
    // 设置主轴方向
    justifyContent: "center",
    // 交叉轴方向，默认 “start”
    alignItems: "center"
  },
  child1:{
    width:100,
    height:100,
    backgroundColor:"green"
  },
  child2:{
    width:100,
    height:100,
    backgroundColor:"blue"
  }
});

/*
  flex

  可以给组件指定flex, 其值为数字。
  flex:1 表示，组件可以撑满父组件所有的剩余空间
  若同时存在多个并列的子组件都设置为flex为1，则表现为均分。

  如果这些并列的子组件的flex 值不同，各设置了flex 子组件的flex 值比为占剩余空间大小之比。
*/

/*
  练习：
  组件结构不变
*/

var DemoFlex2 = React.createClass({
  render: function(){
    return (
      <View style={demoStyles_2.container}>
        <Text style={{textAlign:"center"}}>DemoFlex2</Text>
        <View style={demoStyles_2.child1}></View>
        <View style={demoStyles_2.child2}></View>
        <View style={demoStyles_2.child3}></View>
      </View>
    )
  }
})

var demoStyles_2 = StyleSheet.create({
  container:{
    marginTop:25,
    flex:1, // 使父组件占满窗口
    backgroundColor:"cyan",
    padding:10
  },
  child1:{
    flex:1,
    backgroundColor:"green"
  },
  child2:{
    flex:2,
    backgroundColor:"yellow"
  },
  child3:{
    flex:3,
    backgroundColor:"red"
  }
})


AppRegistry.registerComponent('flex', () => DemoFlex2);
