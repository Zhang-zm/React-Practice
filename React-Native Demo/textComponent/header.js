import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 定义定义eader 组件
var Header = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        {/* 注意：JSX 语法，注释要包在{}里 */}
        <Text style={styles.common}>
          <Text style={styles.words_left}>张立欣</Text>
          <Text style={styles.words_middle}>是</Text>
          <Text>大傻逼</Text>
        </Text>
      </View>
    );
  }
});

// Header 样式
var styles = StyleSheet.create({
  container:{
    height:40,
    marginTop:25,
    borderBottomWidth:1,
    borderBottomColor:"#ef2d36",
    alignItems:"center"
  },
  common:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center"
  },
  words_left:{
    color:"#cd1d1c"
  },
  words_middle:{
    color:"#fff",
    backgroundColor:"green",
    fontWeight:"normal"
  }

});

//导出组件
module.exports = Header;
