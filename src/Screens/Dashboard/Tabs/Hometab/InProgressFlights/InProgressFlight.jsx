import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const flightData = [
  {
    station: 'StationXYZ',
    airline: 'AirlineXYZ',
    flightNumber: '244120',
    aircraftType: 'New aircraft',
    dateTime: '11/07/2024 22:05:56',
  },
  {
    station: 'StationXYZ',
    airline: 'AirlineXYZ',
    flightNumber: '244120',
    aircraftType: 'New aircraft',
    dateTime: '11/07/2024 22:05:56',
  },
  {
    station: 'StationXYZ',
    airline: 'AirlineXYZ',
    flightNumber: '244120',
    aircraftType: 'New aircraft',
    dateTime: '11/07/2024 22:05:56',
  },
  {
    station: 'StationXYZ',
    airline: 'AirlineXYZ',
    flightNumber: '244120',
    aircraftType: 'New aircraft',
    dateTime: '11/07/2024 22:05:56',
  },
];

const InProgressFlight = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={Images.logo} />
        <Image style={styles.icon} source={Images.LogoutIcon} />
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.icon} source={Images.BackIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>In Progress</Text>
        <View style={styles.placeholder} />
      </View>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        {flightData?.map((item, index) => {
          return (
            <View style={styles.flightStatusContainer} key={index}>
              <View style={styles.containerRow}>
                <View style={styles.column}>
                  <Text style={styles.boldTxt}>Station</Text>
                  <Text style={styles.normalTxt}>{item?.station}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.boldTxt}>Airline</Text>
                  <Text style={styles.normalTxt}>{item?.airline}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.boldTxt}>Flight#</Text>
                  <Text style={styles.normalTxt}>{item?.flightNumber}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.boldTxt}>Aircraft type</Text>
                  <Text style={styles.normalTxt}>{item?.aircraftType}</Text>
                </View>
              </View>
              <View style={styles.secondContainerRow}>
                <View style={styles.dateColumn}>
                  <Text style={styles.boldTxt}>Date/Time</Text>
                  <Text style={styles.normalTxt}>{item?.dateTime}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('ReportDamage')}>
                  <Text style={styles.btnTxt}>Continue Briefing</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default InProgressFlight;
