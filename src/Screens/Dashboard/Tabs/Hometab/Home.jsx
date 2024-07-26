/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Image style={styles.logo} source={Images.logo} />
        <Image style={styles.Icon} source={Images.LogoutIcon} />
      </View>
      <View style={{marginTop: -30}}>
        <View style={styles.HeadingRow}>
          <Text style={styles.coloredText}>Welcome</Text>
          <Text style={{fontSize: 22, fontWeight: '700'}}>James</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('AddFlight')}>
            <Image style={styles.ItemImage} source={Images.ItemImage} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>New Flight</Text>
              <Image style={styles.overlayIcon} source={Images.flightIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cardContainer}>
              <Image
                style={styles.ItemImage}
                source={Images.inprogressFlightImg}
              />
              <View style={styles.overlay}>
                <Text style={styles.overlayText}> In Progress</Text>
                <Image
                  style={styles.overlayIcon}
                  source={Images.inprogressFlightIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
