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
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

var TouchableComponent = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.input}></View>
        </View>
        <TouchableOpacity style={styles.btn}>
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
    height:45,
    justifyContent:"center",
    alignItems:"center"
  },
  search:{
    color:"#fff",
    fontSize:15,
    fontWeight:"bold"
  }
});


AppRegistry.registerComponent('TouchableComponent', () => TouchableComponent);
