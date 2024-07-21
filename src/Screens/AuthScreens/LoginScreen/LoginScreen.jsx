import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../../utlis/Images';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.Container}>
      <Image style={style.logo} source={Images.logo} />
      <Text style={style.Heading}>Welcome</Text>
      <View style={style.LoginContainer}>
        <View style={style.cell}>
          <Text style={style.cellTxt}>Email</Text>
          <View style={style.inputContainer}>
            <TextInput style={style.Input} placeholder="Enter email" />
            <Image style={style.inputIcon} source={Images.emailIcon} />
          </View>
        </View>
        <View style={style.cell}>
          <Text style={style.cellTxt}>Password</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.Input}
              secureTextEntry
              placeholder="Enter Password"
            />
            <Image style={style.inputIcon} source={Images.passwordIcon} />
          </View>
        </View>
        <Text
          style={style.ForgotTxt}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={style.button}>
          <Text style={style.btnTxt}>Sign in</Text>
        </TouchableOpacity>
        <View style={style.AccountTxt}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{color: 'red'}}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={style.FaceIdButtonContanier}>
          <TouchableOpacity style={style.FaceIdButton}>
            <Image style={style.FeceIdIcon} source={Images.faceId} />
          </TouchableOpacity>
          <Text style={style.FaceIdTxt}>Login with Face ID</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
