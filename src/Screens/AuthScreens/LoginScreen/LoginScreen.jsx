import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../utlis/Images';
import {loginSchema} from '../../../utlis/Validation';
import style from './style';
import useLoginStore from './useLoginStore';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {secure, loading, status, setSecure, handleSubmitForm} =
    useLoginStore();
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const onSubmitLogin = async values => {
    handleSubmitForm(values, navigation);
  };

  const handleFaceDetection = ({faces}) => {
    if (faces.length > 0) {
      setIsCameraVisible(false);
      handleSubmitForm({faceData: faces[0]}, navigation);
    }
  };

  return (
    <Formik
      onSubmit={onSubmitLogin}
      validationSchema={loginSchema}
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{email: '', password: ''}}>
      {({handleChange, handleSubmit, values, errors}) => (
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
                  value={values.email}
                  onChangeText={text => handleChange('email')(text)}
                />
                <Image style={style.inputIcon} source={Images.emailIcon} />
              </View>
            </View>
            {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
            <View style={style.cell}>
              <Text style={style.cellTxt}>Password</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={style.Input}
                  secureTextEntry={secure}
                  placeholder="Enter Password"
                  value={values.password}
                  onChangeText={text => handleChange('password')(text)}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                  <Image style={style.inputIcon} source={Images.passwordIcon} />
                </TouchableOpacity>
              </View>
            </View>
            {errors.password && (
              <Text style={{color: 'red'}}>{errors.password}</Text>
            )}
            {status && (
              <Text style={{color: 'red', marginTop: 5}}>{status}</Text>
            )}
            <Text
              style={style.ForgotTxt}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password?
            </Text>
            <TouchableOpacity style={style.button} onPress={handleSubmit}>
              <Text style={style.btnTxt}>
                {loading ? <ActivityIndicator /> : 'Sign in'}
              </Text>
            </TouchableOpacity>
            <View style={style.AccountTxt}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={{color: 'red'}}>Signup</Text>
              </TouchableOpacity>
            </View>
            <View style={style.FaceIdButtonContanier}>
              <TouchableOpacity
                style={style.FaceIdButton}
                onPress={() => setIsCameraVisible(true)}>
                <Image style={style.FeceIdIcon} source={Images.faceId} />
              </TouchableOpacity>
              <Text style={style.FaceIdTxt}>Login with Face ID</Text>
            </View>
          </View>

          {/* <Modal visible={isCameraVisible} transparent={false}>
            <RNCamera
              style={{flex: 1}}
              type={RNCamera.Constants.Type.front}
              onFacesDetected={handleFaceDetection}
              faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
            />
          </Modal> */}
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
