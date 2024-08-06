import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import OTPTextView from 'react-native-otp-textinput';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../utlis/Images';
import {otpCode} from '../../../utlis/Validation';
import style from './style';
import useForgotPasswordStore from '../ForgotPassword/useForgotPasswordStore';
import useVerifyEmailStore from './useVerifyEmailStore';

const VerifyEmail = () => {
  const navigation = useNavigation();
  const {email} = useForgotPasswordStore();
  const {loading, status, onSubmitForm} = useVerifyEmailStore();

  const handleFormSubmit = async values => {
    onSubmitForm(values, navigation);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      validationSchema={otpCode}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{tfa_code: '', email}}>
      {({handleChange, handleSubmit, values, errors}) => (
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
                  <OTPTextView
                    containerStyle={{marginBottom: 20}}
                    textInputStyle={{
                      borderWidth: 2,
                      height: 50,
                      width: 50,
                      borderRadius: 10,
                      marginHorizontal: 20,
                    }}
                    defaultValue={values?.tfa_code}
                    handleTextChange={text => handleChange('tfa_code')(text)}
                    inputCount={4}
                    keyboardType="numeric"
                    inputCellLength={1}
                  />
                </View>
              </View>
              {errors.tfa_code && (
                <Text style={{color: 'red'}}>{errors.tfa_code}</Text>
              )}

              {status && <Text style={{color: 'red'}}>{status}</Text>}

              <TouchableOpacity style={style.button} onPress={handleSubmit}>
                {loading ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={style.btnTxt}>Verify and Continue</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default VerifyEmail;
