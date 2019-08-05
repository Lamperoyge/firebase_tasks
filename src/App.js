import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/RegisterPage'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: Register},
});


export default App = createAppContainer(MainNavigator);

