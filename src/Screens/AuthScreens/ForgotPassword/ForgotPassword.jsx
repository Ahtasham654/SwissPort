import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import style from './style';
import Images from '../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';
import {forgetPasswordSchema} from '../../../utlis/Validation';
import {Formik} from 'formik';
import useForgotPasswordStore from './useForgotPasswordStore';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const {loading, status, onSubmitForm} = useForgotPasswordStore();

  const SubmitForm = values => {
    onSubmitForm(values, navigation);
  };

  return (
    <Formik
      onSubmit={SubmitForm}
      validationSchema={forgetPasswordSchema}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{email: ''}}>
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
                    value={values.email}
                    onChangeText={text => handleChange('email')(text)}
                  />
                </View>
              </View>
              {errors.email && (
                <Text style={{color: 'red', marginTop: 5}}>{errors.email}</Text>
              )}
              {status && (
                <Text style={{color: 'red', marginTop: 5}}>{status}</Text>
              )}

              <TouchableOpacity style={style.button} onPress={handleSubmit}>
                <Text style={style.btnTxt}>
                  {loading ? <ActivityIndicator /> : 'Continue'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ForgotPassword;
