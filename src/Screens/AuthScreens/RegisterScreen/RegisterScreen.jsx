/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import Images from '../../../utlis/Images';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import {registrationSchema} from '../../../utlis/Validation';
import {Formik} from 'formik';
import {handleApi} from '../../../utlis/handleApi';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitLogin = async values => {
    console.log('Registration form data', values);
    setLoading(true);
    try {
      const result = await handleApi.post('register', values);
      if (result?.status === 200) {
        console.log('User Register SuccessFully');
        navigation.navigate('VerifyEmail');
      }
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };
  return (
    <Formik
      onSubmit={onSubmitLogin}
      validationSchema={registrationSchema}
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        employee_number: '',
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
                    value={values.first_name}
                    onChangeText={text => {
                      handleChange('first_name')(text);
                    }}
                  />
                </View>
              </View>
              {errors.first_name && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.first_name}
                </Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Last Name</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter last name"
                    value={values.last_name}
                    onChangeText={text => {
                      handleChange('last_name')(text);
                    }}
                  />
                </View>
              </View>
              {errors.last_name && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.last_name}
                </Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>email</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter email"
                    value={values.email}
                    onChangeText={text => {
                      handleChange('email')(text);
                    }}
                  />
                </View>
              </View>
              {errors.email && (
                <Text style={{color: 'red', marginTop: 5}}>{errors.email}</Text>
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
                    value={values.employee_number}
                    onChangeText={text => {
                      handleChange('employee_number')(text);
                    }}
                  />
                </View>
              </View>
              {errors.employee_number && (
                <Text style={{color: 'red', marginTop: 5}}>
                  {errors.employee_number}
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
                  <Text style={style.btnTxt}>
                    {loading ? <ActivityIndicator /> : 'Register'}
                  </Text>
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
