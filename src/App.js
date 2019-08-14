import React from 'react';
import LoginPage from './Pages/Login/LoginPage';
import Register from './Pages/Register/RegisterPage'
import RegisterForm from './Pages/Register/RegisterForm';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: Register},
  RegisterForm: {screen: RegisterForm}
});


export default App = createAppContainer(MainNavigator);

