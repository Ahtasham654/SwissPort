import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Images from '../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const CreatePassword = () => {
  const navigation = useNavigation();
  return (
    <View style={style.Container}>
      <View style={style.Circle}>
        <View style={style.subCircle}>
          <Image source={Images.confirmPasswordIcon} style={style.lockIcon} />
        </View>
      </View>
      <View style={style.ContentContainer}>
        <Text style={style.Heading}>Create New Password</Text>
        <Text style={style.subHeading}>
          Your new password must be different from previously used passwords.
        </Text>
        <View style={style.cell}>
          <Text style={style.cellTxt}>New Password</Text>
          <View style={style.inputContainer}>
            <TextInput style={style.Input} placeholder="Enter new Password" />
            {/* <Image style={style.inputIcon} source={Images.emailIcon} /> */}
          </View>
        </View>
        <View style={style.cell}>
          <Text style={style.cellTxt}>Confirm New Password</Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.Input}
              secureTextEntry
              placeholder="Confirm New Password"
            />
            {/* <Image style={style.inputIcon} source={Images.passwordIcon} /> */}
          </View>
        </View>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={style.btnTxt}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePassword;
