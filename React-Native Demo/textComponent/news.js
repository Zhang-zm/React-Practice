import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


// 组件
var News = React.createClass({
  render: function(){
    // 定义数组，用于存储Text 内容
    var newsArray = [];

    for(var i in this.props.news){
      var text = (
        <Text>
          numberOfLines={2} {/* 最多显示两行 */}
          key={i}>
          {this.props.news[i]}
        </Text>
      );
      newsArray.push(text);
    }
    return (
      <View>
        <Text>今日要闻</Text>
        {　『<Text></Text>}
      </View>
    );
  }
})



// 导出模块
module.exports = News;
