/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import Images from '../../../utlis/Images';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  return (
    <View style={style.Container}>
      <Image style={style.logo} source={Images.logo} />
      <View style={style.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={style.Icon} source={Images.BackIcon} />
        </TouchableOpacity>
        <Text style={style.HeaderText}>Registration</Text>
        <View style={style.Placeholder} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollViewContent}>
        <View style={style.LoginContainer}>
          <View style={style.cell}>
            <Text style={style.cellTxt}>First Name</Text>
            <View style={style.inputContainer}>
              <TextInput style={style.Input} placeholder="Enter first name" />
            </View>
          </View>
          <View style={style.cell}>
            <Text style={style.cellTxt}>Last Name</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.Input}
                secureTextEntry
                placeholder="Enter last name"
              />
            </View>
          </View>
          <View style={style.cell}>
            <Text style={style.cellTxt}>Email</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.Input}
                secureTextEntry
                placeholder="Enter email"
              />
            </View>
          </View>
          <View style={style.cell}>
            <Text style={style.cellTxt}>Password</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.Input}
                secureTextEntry
                placeholder="Enter password"
              />
            </View>
          </View>
          <View style={style.cell}>
            <Text style={style.cellTxt}>Employee Number</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.Input}
                secureTextEntry
                placeholder="Enter employee number"
              />
            </View>
          </View>
          <View style={style.cell}>
            <Text style={style.cellTxt}>Station</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.Input}
                secureTextEntry
                placeholder="Enter your station"
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text>Enable Face ID</Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#E23E1F"
              offColor="grey"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="medium"
              onToggle={() => setToggle(!toggle)}
            />
          </View>
          <View style={style.inputButtonContainer}>
            <TouchableOpacity
              style={style.button}
              onPress={() => navigation.navigate('VerifyEmail')}>
              <Text style={style.btnTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
