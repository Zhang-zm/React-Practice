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
  View,
  Image
} from 'react-native';

/*
  Image 组件，用于显示图片(包括网络图片、静态资源等)

  常用性能：
    resizeMode 图片适应模式cover, contain, stretch
    source 图片饮用地址
    iOS 支持属性：onLoad, onLoadEnd, onLoadStart, onProgress
*/

var ImageComponent = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.net}>
          <Image
            style={styles.netImage}
            source={{uri:"https://service.loanmon.com/wdk/website/img/logo.png"}}/>
        </View>
        <View style={styles.local}>
          <Image
            style={styles.localImage}
            source={require("./img/sjb.jpg")}
            />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25,
    backgroundColor:"red",
    alignItems:"center"
  },
  net:{
    marginTop:30,
    width:300,
    height:240,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"cyan"
  },
  netImage:{
    width:280,
    height:200,
    backgroundColor:"gray"
  },
  local:{
    marginTop:30,
    width:200,
    height:200,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"yellow"
  },
  localImage:{
    width:100,
    height:80,
    backgroundColor:"gray"
  }
});

AppRegistry.registerComponent('ImageComponent', () => ImageComponent);
