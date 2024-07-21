import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import style from './style';
import Images from '../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={style.Container}>
      <View style={style.Circle}>
        <View style={style.subCircle}>
          <Image source={Images.lockIcon} style={style.lockIcon} />
        </View>
      </View>
      <View style={style.ContentContainer}>
        <Text style={style.Heading}>Forgot Password?</Text>
        <Text style={style.subHeading}>
          Please enter the email address attached to this account to get OTP
        </Text>
        <View style={style.ForgotContainer}>
          <View style={style.cell}>
            <View style={style.inputContainer}>
              <TextInput style={style.Input} placeholder="Enter email" />
            </View>
          </View>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('VerifyEmail')}>
            <Text style={style.btnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
