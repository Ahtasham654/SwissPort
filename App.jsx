import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/Screens/AuthScreens/SplashScreen';
import LoginScreen from './src/Screens/AuthScreens/LoginScreen/LoginScreen';
import RegisterScreen from './src/Screens/AuthScreens/RegisterScreen/RegisterScreen';
import ForgotPassword from './src/Screens/AuthScreens/ForgotPassword/ForgotPassword';
import VerifyEmail from './src/Screens/AuthScreens/VerifyEmail/VerifyEmail';
import CreatePassword from './src/Screens/AuthScreens/CreatePassword/CreatePassword';


const stack = createNativeStackNavigator();

const App = () => {
  <NavigationContainer>
    <stack.Navigator initialRouteName="SplashScreen">
      <stack.Screen name="SplashScreen" component={SplashScreen} />
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <stack.Screen name="CreatePassword" component={CreatePassword} />
    </stack.Navigator>
  </NavigationContainer>;
};

export default App;
