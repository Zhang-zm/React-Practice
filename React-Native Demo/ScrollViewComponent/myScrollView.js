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
  RefreshControl
} from 'react-native';

/*
  实现监测拖拽、滑动的相关方法
  添加几个子组件

  RefreshControl 刷新组件(RN)

*/

var MyScrollView = React.createClass({
  _onScrollBeginDrag: function(){
    /* 开始拖拽 */
    console.log("开始拖拽");
  },
  _onScrollEndDrag: function(){
    /* 结束拖拽 */
    console.log("结束拖拽");
  },
  _onMomentumScrollBegin: function(){
    /* 开始滑动 */
    console.log("开始滑动");
  },
  _onMomentumScrollEnd: function(){
    /* 滑动结束 */
    console.log("结束滑动");
  },
  _onRefresh: function(){
    /* 刷新 */
    console.log("刷新");;
  },
  render: function(){
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showVerticalScrollIndicator={true}
          onScrollBeginDrag={this._onScrollBeginDrag}
          onScrollEndDrag={this._onScrollEndDrag}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="#30b08f"
              title="正在加载"
              onRefresh={this._onRefresh}/>
          }>
          <View style={styles.view_1}></View>
          <View style={styles.view_2}></View>
          <View style={styles.view_3}></View>
        </ScrollView>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  scrollView:{
    marginTop:25,
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:"#ebf6c9"
  },
  view_1:{
    marginTop:15,
    flex:1,
    height:150,
    backgroundColor:"#9cdda9"
  },
  view_2:{
    marginTop:15,
    flex:1,
    height:300,
    backgroundColor:"#85cda7"
  },
  view_3:{
    marginTop:15,
    flex:1,
    height:450,
    backgroundColor:"#56c19f"
  }
});

module.exports = MyScrollView;
