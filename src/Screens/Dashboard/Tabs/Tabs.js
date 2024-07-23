/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import styles from './style';
import Images from '../../../utlis/Images';
import Home from './Hometab/Home';
import Profile from './Profiletab/Profile';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress, isActive}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.tabButton,
      isActive && styles.activeTabButton,
      isActive && styles.activeTabButtonBorder,
    ]}>
    {children}
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: {
          marginTop: 0,
          width: 0,
          borderRadius: 0,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarButton: props => (
          <CustomTabBarButton
            {...props}
            isActive={props.accessibilityState.selected}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.HomeFilledIcon : Images.HomeIcon}
              style={style.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.ProfileFilledIcon : Images.ProfileIcon}
              style={style.Profileicon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  Profileicon: {
    width: 30,
    height: 30,
  },
});
