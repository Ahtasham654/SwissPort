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
import {registrationSchema} from '../../../utlis/Validation';
import {Formik} from 'formik';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);

  const onSubmitLogin = values => {
    console.log('Registration form data', values);
  };
  return (
    <Formik
      onSubmit={onSubmitLogin}
      validationSchema={registrationSchema}
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{
        firstName: '',
        lastName: '',
        Email: '',
        password: '',
        employeeNumber: '',
        station: '',
      }}>
      {({handleChange, handleSubmit, values, errors}) => (
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
                  <TextInput
                    style={style.Input}
                    placeholder="Enter first name"
                    value={values.firstName}
                    onChangeText={text => {
                      handleChange('firstName')(text);
                    }}
                  />
                </View>
              </View>
              {errors.firstName && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.firstName}
                </Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Last Name</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter last name"
                    value={values.lastName}
                    onChangeText={text => {
                      handleChange('lastName')(text);
                    }}
                  />
                </View>
              </View>
              {errors.lastName && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.lastName}
                </Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Email</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter email"
                    value={values.Email}
                    onChangeText={text => {
                      handleChange('Email')(text);
                    }}
                  />
                </View>
              </View>
              {errors.Email && (
                <Text style={{color: 'red', marginTop: 5}}>{errors.Email}</Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Password</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter password"
                    value={values.password}
                    onChangeText={text => {
                      handleChange('password')(text);
                    }}
                  />
                </View>
              </View>
              {errors.password && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.password}
                </Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Employee Number</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter employee number"
                    value={values.employeeNumber}
                    onChangeText={text => {
                      handleChange('employeeNumber')(text);
                    }}
                  />
                </View>
              </View>
              {errors.employeeNumber && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.employeeNumber}
                </Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Station</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter your station"
                    value={values.station}
                    onChangeText={text => {
                      handleChange('station')(text);
                    }}
                  />
                </View>
              </View>
              {errors.station && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.station}
                </Text>
              )}
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
                  // onPress={() => navigation.navigate('VerifyEmail')}
                  onPress={handleSubmit}>
                  <Text style={style.btnTxt}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default RegisterScreen;
