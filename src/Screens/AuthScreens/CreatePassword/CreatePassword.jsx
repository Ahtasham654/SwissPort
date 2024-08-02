import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Images from '../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {createPasswordSchema} from '../../../utlis/Validation';

const CreatePassword = () => {
  const navigation = useNavigation();

  const onSubmitForm = values => {
    console.log('Submit Form Data', values);
  };

  return (
    <Formik
      onSubmit={onSubmitForm}
      validationSchema={createPasswordSchema}
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{newPassword: '', confirmPassword: ''}}>
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
                  value={values.newPassword}
                  onChangeText={text => {
                    handleChange('newPassword')(text);
                  }}
                />
              </View>
            </View>
            {errors.newPassword && (
              <Text style={{color: 'red'}}>{errors.newPassword}</Text>
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
            <TouchableOpacity
              style={style.button}
              onPress={() => navigation.navigate('LoginScreen')}
              // onPress={handleSubmit}
            >
              <Text style={style.btnTxt}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default CreatePassword;
