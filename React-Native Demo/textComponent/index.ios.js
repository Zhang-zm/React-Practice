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


/*
  Text 组件

  onPress 手指触摸事件
  numberOfLines 显示多少行

  可以设置字体颜色，大小，对齐方式
*/

/*
  需求：

  界面布局分为两部分：Header, 新闻信息

  整个页面是一个组件，由两个子组件构成

  现在单独一个文件中定义子组件，使用Module.exprots 将组件导出为独立模块

  再在index.ios.js 中引用
*/

// 引入Header 组件
var Header = require("./header");
var News = require("./news");


var textDemo = React.createClass({
  render: function(){
    var newsItemData = [
      "新闻",
      "这条新闻是大于三行的，多余两行会隐藏。因为设置了numberOfLines 属性 = 2. 新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长新闻有这么长",
      "内容内容内容内容内容内容内容内容内容内容内容内容大概是这样。",
      "什么也没有"
    ];
    return (
      <View style={styles.flex}>
        <Header></Header>
        <News news={newsItemData}></News>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    flex:1
  }
});


AppRegistry.registerComponent('textComponent', () => textDemo);
