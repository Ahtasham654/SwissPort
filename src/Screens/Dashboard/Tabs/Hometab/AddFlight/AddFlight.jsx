import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import Images from '../../../../../utlis/Images';
import CustomDropdown from '../../../../../components/CustomDropDown';
import {useNavigation} from '@react-navigation/native';

const stationData = [
  {
    value: 1,
    name: 'Section XYZ',
  },
  {
    value: 2,
    name: 'Section ABC',
  },
  {
    value: 2,
    name: 'Section MNO',
  },
];

const AddFlight = () => {
  const [station, setStation] = useState();
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
    setCurrentTime(date.toLocaleTimeString());

    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } else {
        getCurrentLocation();
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    };

    requestLocationPermission();
  }, []);

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
        <Text style={styles.HeaderText}>New Flight</Text>
        <View style={styles.Placeholder} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '85%'}}>
        <CustomDropdown
          data={stationData}
          onSelect={item => {
            setStation(item);
          }}
          label="Station"
          placeholder="Select Station"
          containerStyle={{color: 'black'}}
        />
        <CustomDropdown
          data={stationData}
          onSelect={item => {
            setStation(item);
          }}
          label="Airline"
          placeholder="Select Station"
          containerStyle={{color: 'black'}}
        />
        <CustomDropdown
          data={stationData}
          onSelect={item => {
            setStation(item);
          }}
          label="Aircraft type"
          placeholder="Select Station"
          containerStyle={{color: 'black'}}
        />
        <View style={styles.cell}>
          <Text style={styles.cellTxt}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.Input} placeholder="Enter first name" />
          </View>
        </View>
        <View style={styles.Twocell}>
          <Text style={styles.cellTxt}>Date and Time</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              gap: 10,
            }}>
            <View style={styles.SubinputContainer}>
              <TextInput
                style={styles.SubInput}
                value={currentDate}
                placeholder="Select Date"
              />
            </View>
            <View style={styles.SubinputContainer}>
              <TextInput
                style={styles.SubInput}
                value={currentTime}
                placeholder="Select Time"
              />
            </View>
          </View>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellTxt}>Location </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.Input}
              value={location}
              placeholder="Fetching location..."
              editable={false}
            />
          </View>
        </View>
        <View style={styles.inputButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BriefingScreen')}>
            <Text style={styles.btnTxt}>Begin Briefing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddFlight;
