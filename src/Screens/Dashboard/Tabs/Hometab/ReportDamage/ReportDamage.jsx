import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const ReportDamage = () => {
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
        <Text style={styles.HeaderText}>Report Damage</Text>
        <View style={styles.Placeholder} />
      </View>

      <Text style={styles.Subtitle}>Use this space to report damage</Text>

      <TouchableOpacity style={styles.TakePictureButton}>
        <Image style={styles.CameraIcon} source={Images.CameraIcon} />
        <Text style={styles.TakePictureText}>Take Picture</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.DescriptionInput}
        placeholder="Description of damage"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.CloseFlightButton}>
        <Text style={styles.CloseFlightText}>Close Flight</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportDamage;
