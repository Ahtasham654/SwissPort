import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const AcknowledgeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Image style={styles.logo} source={Images.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image style={styles.Icon} source={Images.LogoutIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.Icon} source={Images.BackIcon} />
        </TouchableOpacity>
        <Text style={styles.HeaderText} />
        <View style={styles.Placeholder} />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            width: '80%',
            textAlign: 'center',
          }}>
          I acknowledge that I have photographed and inspected the arrival
          condition of this aircraft and that there is no obvious damage.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DepartureScreen')}>
          <Text style={styles.btnTxt}>No Damage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ReportButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.ReportbtnTxt}>Report Damage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AcknowledgeScreen;
