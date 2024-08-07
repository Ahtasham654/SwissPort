import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Images from '../../../../utlis/Images';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Image style={styles.logo} source={Images.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image style={styles.Icon} source={Images.LogoutIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.HeadingRow}>
        <Text style={styles.coloredText}>My Profile</Text>
      </View>
      <View style={styles.SectionContainer}>
        <View style={styles.SectionRow}>
          <View style={styles.SectionItem}>
            <Image style={styles.SectionIcon} source={Images.EditIcon} />
            <Text>Edit Profile</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image style={styles.SectionIcon} source={Images.ForwordIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.Divider} />
      </View>
      <View style={styles.SectionContainer}>
        <View style={styles.SectionRow}>
          <View style={styles.SectionItem}>
            <Image style={styles.SmallIcon} source={Images.faceId} />
            <Text>Face ID</Text>
          </View>
          <ToggleSwitch
            isOn={toggle}
            onColor="#E23E1F"
            offColor="grey"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={() => setToggle(!toggle)}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
