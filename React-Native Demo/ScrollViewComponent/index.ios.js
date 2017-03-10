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
  练习一

  实现ScrollView 的基本功能
*/

// var ScrollViewComponent = require("./myScrollView");

/*

  练习二

  电影列表
*/

var MovieList = require("./movieList");



AppRegistry.registerComponent('ScrollViewComponent', () => MovieList);
