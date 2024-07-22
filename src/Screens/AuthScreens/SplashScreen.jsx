import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Images from '../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Images.background} style={style.backgroundImage}>
      <View style={style.Container}>
        <Image style={style.logo} source={Images.logo} />
        <View style={style.BtnContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{color: 'white', fontWeight: '600'}}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={style.Registertxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  BtnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: '7%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#E23E1F',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Registertxt: {
    marginTop: 10,
    fontWeight: '500',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    marginTop: '10%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
