import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import Images from '../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {createPasswordSchema} from '../../../utlis/Validation';
import useCreatePasswordStore from './useCreatePasswordStore';
import useVerifyEmailStore from '../VerifyEmail/useVerifyEmailStore';

const CreatePassword = () => {
  const navigation = useNavigation();
  const {passwordData} = useVerifyEmailStore();
  const {loading, postSubmitForm} = useCreatePasswordStore();

  const handleSubmit = values => {
    postSubmitForm(values, navigation);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={createPasswordSchema}
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{
        password: '',
        confirmPassword: '',
        email: passwordData?.email,
        tfa_code: passwordData?.tfa_code,
      }}>
      {({handleChange, handleSubmit, values, errors}) => (
        <View style={style.Container}>
          <View style={style.Circle}>
            <View style={style.subCircle}>
              <Image
                source={Images.confirmPasswordIcon}
                style={style.lockIcon}
              />
            </View>
          </View>
          <View style={style.ContentContainer}>
            <Text style={style.Heading}>Create New Password</Text>
            <Text style={style.subHeading}>
              Your new password must be different from previously used
              passwords.
            </Text>
            <View style={style.cell}>
              <Text style={style.cellTxt}>New Password</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={style.Input}
                  placeholder="Enter new Password"
                  value={values.password}
                  onChangeText={text => {
                    handleChange('password')(text);
                  }}
                />
              </View>
            </View>
            {errors.password && (
              <Text
                style={{color: 'red', alignSelf: 'flex-start', marginTop: 5}}>
                {errors.password}
              </Text>
            )}
            <View style={style.cell}>
              <Text style={style.cellTxt}>Confirm New Password</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={style.Input}
                  // secureTextEntry
                  placeholder="Confirm New Password"
                  value={values.confirmPassword}
                  onChangeText={text => {
                    handleChange('confirmPassword')(text);
                  }}
                />
              </View>
            </View>
            {errors.confirmPassword && (
              <Text
                style={{color: 'red', alignSelf: 'flex-start', marginTop: 10}}>
                {errors.confirmPassword}
              </Text>
            )}
            <TouchableOpacity style={style.button} onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={style.btnTxt}>Reset Password</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default CreatePassword;
