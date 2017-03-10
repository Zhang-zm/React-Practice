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
  ScrollView,
  Image,
  RefreshControl
} from 'react-native';


/*
  数据源: https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json

  数据下载到本地使用 /data.json
*/

// 从文件中读取数据，在用require 导入时，执行了JSON.parse()  将json 格式字符串转换成了json 对象
var movieData = require("./data.json");

var movies = movieData.movies;



var MovieList = React.createClass({
  _onRefresh:function(){
    console.log("Loading");
    alert("刷新操作");
  },
  render: function(){
    var movieRows = [];

    for(var index in movies){
      var movie = movies[index];

      /*
        创建组件
        显示电影信息：缩略图 电影名称 上映时间
      */
      var rowStyles = styles.row;

      if(index != 0){
        rowStyles = [rowStyles];
        rowStyles.push(styles.row_notFirst);
      }

      var row = (
        <View
          style={rowStyles}
          key={index}>
          <Image
            style={styles.thumbnall}
            source={{uri:movie.posters.thumbnail}}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
      movieRows.push(row);
    }
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="#e4d6bf"
              title="Loading"
              onRefresh={this._onRefresh}/>
          }>
          {
            /* 添加数组(所有子组件) */
            movieRows
          }
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#c4edfe"
  },
  scrollView:{
    flex:1,
    marginTop:25,
    backgroundColor:"#f7f8f3"
  },
  row:{
    flexDirection:"row",
    padding:5,
    alignItems:"center",
    backgroundColor:"#e4d6bf"
  },
  row_notFirst:{
    marginTop:15
  },
  thumbnall:{
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
  }
});

module.exports = MovieList;
