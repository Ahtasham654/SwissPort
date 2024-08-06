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
import {handleApi} from '../../../utlis/handleApi';
import useVerifyEmailStore from '../VerifyEmail/useVerifyEmailStore';

const CreatePassword = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {passwordData} = useVerifyEmailStore();

  const onSubmitForm = async values => {
    const {password, email, tfa_code} = values;
    const dataToSend = {password, email, tfa_code};

    setLoading(true);
    console.log('dataToSend....', dataToSend);
    try {
      const result = await handleApi.post('reset-password', dataToSend);
      if (result?.status === 200) {
        console.log('Password successfully reset', result?.data);
        setLoading(false);
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      onSubmit={onSubmitForm}
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
