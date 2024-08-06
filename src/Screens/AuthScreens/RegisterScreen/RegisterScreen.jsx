import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import style from './style';
import Images from '../../../utlis/Images';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import {registrationSchema} from '../../../utlis/Validation';
import {Formik} from 'formik';
import useRegisterStore from './useRegistrationStore';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {toggle, loading, status, setToggle, onSubmitForm} = useRegisterStore();
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [faceData, setFaceData] = useState(null);

  const submitRegistrationForm = values => {
    onSubmitForm(values, navigation, faceData);
  };

  const handleFaceDetection = ({faces}) => {
    if (faces.length > 0) {
      setFaceData(faces[0]);
      setIsCameraVisible(false);
    }
  };

  return (
    <Formik
      onSubmit={submitRegistrationForm}
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
                  onToggle={() => {
                    setToggle(!toggle);
                    setIsCameraVisible(!toggle);
                  }}
                />
              </View>
              <View style={style.inputButtonContainer}>
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                  <Text style={style.btnTxt}>
                    {loading ? <ActivityIndicator /> : 'Register'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

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

export default RegisterScreen;
