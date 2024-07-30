import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const DepartureAcknowledge = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Image style={styles.logo} source={Images.logo} />
        <Image style={styles.Icon} source={Images.LogoutIcon} />
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
          I acknowledge that i have photographed and inspected the aircraft
          prior to departure and it is free from obvious signs of damage.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ReportDamage')}>
          <Text style={styles.btnTxt}>Submit</Text>
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
export default DepartureAcknowledge;
