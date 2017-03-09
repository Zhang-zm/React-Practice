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
  TextInput,
  TouchableOpacity
} from 'react-native';

/*
  TextInput 是一个允许用户再应用当中通过键盘输入文本的基本组件

  此组件的属性提供了多种特性的配置，比如自动完成、自动大小写、占位文字，以及多种不同的键盘类型（如纯数字键盘）等。

  常用属性：
  placeholder
  value
  password
  editable
  returnKeyType （键盘return 键类型）
  onChange
  onEndEditing
  onSubmitEditing
  ......
*/

var TextInputComponent = React.createClass({
  getInitialState: function(){
    return {
      inputText:""
    };
  },
  // 输入框的onChange 处理函数
  getContent: function(text){
    this.setState({
      inputText: text
    })
  },
  clickBtn: function(){
    alert(this.state.inputText);
  },
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <TextInput
          style={styles.input}
          returnKeyType="search"
          placeholder="请输入内容"
          onChangeText={this.getContent}/>
        </View>
        <TouchableOpacity
        style={styles.btn}
        onPress={this.clickBtn}>
          <Text style={styles.search}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    height:45,
    marginTop:25
  },
  flex:{
    flex:1
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:"#ccc",
    borderRadius:4
  },
  btn:{
    width:55,
    marginRight:5,
    marginLeft:5,
    backgroundColor:"#23beff",
    height:43,
    justifyContent:"center",
    alignItems:"center"
  },
  search:{
    color:"#fff",
    fontSize:15,
    fontWeight:"bold"
  }
});



AppRegistry.registerComponent('TextInputComponent', () => TextInputComponent);
