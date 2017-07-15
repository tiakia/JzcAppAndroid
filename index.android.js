/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, AppRegistry} from 'react-native';
import StyleObject from './App/styleSheet.js';
import UserCenter from './App/userCenter';
import { StackNavigator } from 'react-navigation';
import UserInfo from './App/userInfo';

export default class Android extends Component {
  render() {

    return (
      <View style={StyleObject.flex}>
          <UserCenter/>
      </View>
    );
  }
}

AppRegistry.registerComponent('JzcApp', () => Android);
