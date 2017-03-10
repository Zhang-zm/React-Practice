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
   练习1 ListView 基本练习
*/


var ListViewComponent = require("./MyListView.js");
/*
   练习1 ListView 基本练习
*/



AppRegistry.registerComponent('ListViewComponent', () => ListViewComponent);
