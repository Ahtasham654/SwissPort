/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Images from '../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

const VerifyEmail = () => {
  const navigation = useNavigation();
  return (
    <View style={style.Container}>
      <View style={style.Circle}>
        <View style={style.subCircle}>
          <Image source={Images.keyIcon} style={style.lockIcon} />
        </View>
      </View>
      <View style={style.ContentContainer}>
        <Text style={style.Heading}>Verify your email</Text>
        <Text style={style.subHeading}>
          Please enter the email address attached to this account to get OTP
        </Text>
        <View style={style.ForgotContainer}>
          <View style={style.cell}>
            <View style={style.inputContainer}>
              {/* <TextInput style={style.Input} placeholder="Enter email" /> */}
              <OTPTextView
                containerStyle={{marginBottom: 20}}
                textInputStyle={{
                  borderWidth: 2,
                  height: 50,
                  width: 50,
                  borderRadius: 10,
                  marginHorizontal: 20,
                }}
                // defaultValue={values?.otp}
                // handleTextChange={text => {
                //   handleChange('otp')(text);
                //   setError('');
                // }}
                inputCount={4}
                keyboardType="numeric"
                inputCellLength={1}
                // textInputStyle={{width: 30}}
              />
            </View>
          </View>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('CreatePassword')}>
            <Text style={style.btnTxt}>Verify and Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerifyEmail;
