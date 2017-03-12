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
ListView,
Image
} from 'react-native';


// 从文件中 读取数据movieData
var movieData = require("./data.json");

// movies 数据
var movies = movieData.novies; // Array


var MovieList = React.createClass({
  getInitialState: function(){
    // 创建dataSource 对象
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow
    });

    return {
      dataSource: ds.cloneWithRows(movies);
    }
  },
  _renderRow: function(movie){
    // 渲染行组件
    return (
      <View style={styles.row}>
        <Image
        style={styles.thumbnaill}
          source={{uri:movie.posters.thumbnaill}}/>
        <View
          style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text stlye={styles.year}>{movie.year}</Text>
        </Viwe>
      </View>
    );
  },
  _renderHeader: function(){
    // 渲染头部
    renter (
      <View style={styles.header}>
        <Text style={styles.header_text}>Movies List</Text>
        <View style={styles.separator}></View>
      </View>
    );
  },
  _renderSeparator: function(sectionID:number, rowID:number){
    // 渲染分割线
    // 可以接收3个参数(sectionID, rowID, adjacentRowHighlignt)  相参官方文档
    return (
      <View
        key={sectionID+rowID}
        style={styles.separator}>
      </View>
    );
  },
  render: function(){
    return (
      <ListView
        style={styles.ListView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        initialListSize={10}></ListView>
        {/* initialListSize 用于设置ListView 第一次渲染的行数 */}
    );
  }
});

var styles = StyleSheet.create({
  ListView:{
    marginTop:25,
    flex:1,
    backgroundColor:"#f5fcff"
  },

  // 行组件
  row:{
    flexDirection:"row",
    padding:5,
    alignItems:"center",
    backgroundColor:"#f5fcff"
  },
  thumbnail:{
    width:53,
    height:81,
    backgroundColor:"gray"
  },
  rightContainer:{
    marginLeft:10,
    flex:1
  },
  title:{
    fontSize:18,
    marginTop:3,
    marginBottom:3,
    textAlign:"center"
  },
  year:{
    marginBottom:3,
    textAlign:"center"
  }，

  // header 样式
  header:{
    height:50,
    backgroundColor:"#f5fcff"
  },
  headerText:{
    flex:1,
    fontSize:20,
    fontWidth:"bold",
    textAlign:"center",
    lineHeight:44
  }
  // 分割线
  separator:{
    height:1,
    backgroundColor:"#ccc",

  }
});

module.exports = MovieList;
