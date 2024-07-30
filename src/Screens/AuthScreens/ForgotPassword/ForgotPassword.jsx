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
import {forgetPasswordSchema} from '../../../utlis/Validation';
import {Formik} from 'formik';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const onSubmitForm = values => {
    console.log('forgetPassword data', values);
  };
  return (
    <Formik
      onSubmit={onSubmitForm}
      validationSchema={forgetPasswordSchema}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{username: ''}}>
      {({handleChange, handleSubmit, values, errors}) => (
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
                  <TextInput
                    style={style.Input}
                    placeholder="Enter email"
                    value={values.username}
                    onChangeText={text => {
                      handleChange('username')(text);
                    }}
                  />
                </View>
              </View>
              {errors.username && (
                <Text style={{color: 'red'}}>{errors.username}</Text>
              )}

              <TouchableOpacity
                style={style.button}
                // onPress={() => navigation.navigate('VerifyEmail')}
                onPress={handleSubmit}>
                <Text style={style.btnTxt}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ForgotPassword;
