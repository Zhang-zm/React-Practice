import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


// 组件
var News = React.createClass({
  show: function(title){
    alert(title);
  },
  render: function(){
    // 定义数组，用于存储Text 内容
    var newsArray = [];

    for(var i in this.props.news){
      var serialNum = parseInt(i)+1;
      var text = (
        <Text
          style={styles.item}
          onPress={this.show.bind(this,this.props.news[i])}
          numberOfLines={2}
          key={i}>
          {console.log(typeof i)}
          {serialNum}. {this.props.news[i]}
        </Text>
      );
      newsArray.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.title}>今日要闻</Text>
        {newsArray}
      </View>
    );
  }
})

var styles = StyleSheet.create({
  flex:{
    flex:1
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    color:"#cd1d1c",
    marginLeft:10,
    marginTop:15
  },
  item:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:30
  }
});

// 导出模块
module.exports = News;
