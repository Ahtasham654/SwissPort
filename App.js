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
import Dashboard from './src/Screens/Dashboard/Tabs/Tabs';
import EditProfileScreen from './src/Screens/Dashboard/Tabs/Profiletab/EditProfile/EditProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
