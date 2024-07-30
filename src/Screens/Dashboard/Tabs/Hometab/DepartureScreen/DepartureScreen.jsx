import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const DepartureScreen = () => {
  const navigation = useNavigation();

  const items = [
    {name: 'L1 Door', hasPicture: true},
    {name: 'Nose landing gear', hasPicture: true},
    {name: 'R1 Door', hasPicture: true},
    {name: 'Forward logo door', hasPicture: true},
    {name: 'R2 Door', hasPicture: true},
    {name: 'Right Engine', hasPicture: true},
  ];

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
        <Text style={styles.HeaderText}>Departure</Text>
        <View style={styles.Placeholder} />
      </View>
      <Text style={styles.SubHeaderText}>
        Before departure, pictures of key areas must be taken
      </Text>
      <ScrollView style={styles.Content} showsVerticalScrollIndicator={false}>
        <Image style={styles.AirplaneImage} source={Images.AirplaneImg} />
        {items.map((item, index) => (
          <View key={index} style={styles.ItemRow}>
            <Text style={styles.ItemText}>{item.name}</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>
                {item.hasPicture ? 'Retake picture' : 'Take picture'}
              </Text>
            </TouchableOpacity>
            {item.hasPicture && (
              <Image style={styles.PreviewImage} source={Images.PictureIcon} />
            )}
          </View>
        ))}
        <TouchableOpacity
          style={styles.SubmitButton}
          onPress={() => navigation.navigate('DepartureAcknowledge')}>
          <Text style={styles.SubmitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DepartureScreen;
