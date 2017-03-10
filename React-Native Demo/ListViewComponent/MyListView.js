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
ListView
} from 'react-native';


/*
  ListView

  数据列表。本身不需要过多的样式设置，重要的是每一行的设置
  section, header

  ListView.DataSource, 传入数组，在使用dataSource 对象实例化一个ListView 组件。

  ListView 的实现：row/section 组件定义，设置数据

  设置ListView 数据源时，需要借助state,
  需要将dataSource 对象设置为state 属性, ListView 会根据数据源进行渲染
*/

// 原始数据 (array)
var contents = [
  "row2",
  "row1",
  "row3",
  "row4",
  "row5",
  "row6",
  "row7",
  "row8",
  "row9",
  "row10",
  "row11",
  "row12"
];

var MyListView = React.createClass({
  getInitialState: function(){
    // 创建dataSource 对象

    var ds = new ListView.DataSource({
      //判断某行是否改变，只渲染改变的行。
      rowHasChanged: (oldRow,newRow) => oldRow !== newRow
    });
    return {
      // 在ListView 当中，设置dataSource 不直接使用原始数据，要使用cloneWithRows 对数据源进行复制，使用复制后的数据源实例化ListView
      // 优势：当原始数据contents 发生变化时，ListView 组件的dataSource 不会改变
      dataSource: ds.cloneWithRows(contents)
    }
  },
  _renderRow: function(rowData:string){
    //renderRow  属性参数 (rowData, sectionID, rowID, highlightRow)

    // 在此，只使用rowData 参数

    //返回行组件
    return (
      <View style={styles.row}>
        <Text style={styles.content}>{rowData}</Text>
      </View>
    );
  },
  render: function(){
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  },
  row:{
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    height:100,
    borderBottomWidth:1,
    borderColor:"#ccc"
  },
  content:{
    flex:1,
    fontSize:20,
    color:"blue",
    lineHeight:100
  }
});

module.exports = MyListView;
