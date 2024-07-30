import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../../../utlis/Images';
import {loginSchema} from '../../../utlis/Validation';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secure, setSecure] = React.useState(true);

  const onSubmitLogin = values => {
    console.log('Login Data', values);
  };

  return (
    <Formik
      onSubmit={onSubmitLogin}
      validationSchema={loginSchema}
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{username: '', password: ''}}>
      {({handleChange, handleSubmit, values, errors}) => (
        <>
          <View style={style.Container}>
            <Image style={style.logo} source={Images.logo} />
            <Text style={style.Heading}>Welcome</Text>
            <View style={style.LoginContainer}>
              <View style={style.cell}>
                <Text style={style.cellTxt}>Email</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    placeholder="Enter email"
                    value={values.username}
                    onChangeText={text => {
                      handleChange('username')(text);
                    }}
                  />
                  <Image style={style.inputIcon} source={Images.emailIcon} />
                </View>
              </View>
              {errors.username && (
                <Text style={{color: 'red'}}>{errors.username}</Text>
              )}
              <View style={style.cell}>
                <Text style={style.cellTxt}>Password</Text>
                <View style={style.inputContainer}>
                  <TextInput
                    style={style.Input}
                    secureTextEntry={secure}
                    placeholder="Enter Password"
                    value={values.password}
                    onChangeText={text => {
                      handleChange('password')(text);
                    }}
                  />
                  <TouchableOpacity onPress={() => setSecure(!secure)}>
                    <Image
                      style={style.inputIcon}
                      source={Images.passwordIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {errors.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <Text
                style={style.ForgotTxt}
                onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password?
              </Text>
              <TouchableOpacity
                style={style.button}
                // onPress={() => navigation.navigate('Dashboard')}
                onPress={handleSubmit}>
                <Text style={style.btnTxt}>Sign in</Text>
              </TouchableOpacity>
              <View style={style.AccountTxt}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={{color: 'red'}}>Signup</Text>
                </TouchableOpacity>
              </View>
              <View style={style.FaceIdButtonContanier}>
                <TouchableOpacity style={style.FaceIdButton}>
                  <Image style={style.FeceIdIcon} source={Images.faceId} />
                </TouchableOpacity>
                <Text style={style.FaceIdTxt}>Login with Face ID</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginScreen;
