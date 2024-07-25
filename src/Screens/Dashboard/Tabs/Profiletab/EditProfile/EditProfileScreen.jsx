import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Image style={styles.logo} source={Images.logo} />
        <Image style={styles.Icon} source={Images.LogoutIcon} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.Icon} source={Images.BackIcon} />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Edit Profile</Text>
          <View style={styles.Placeholder} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.LoginContainer}>
          <View style={styles.cell}>
            <Text style={styles.cellTxt}>First Name</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.Input} placeholder="Enter first name" />
            </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellTxt}>Last Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.Input}
                secureTextEntry
                placeholder="Enter last name"
              />
            </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellTxt}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.Input}
                secureTextEntry
                placeholder="Enter email"
              />
            </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellTxt}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.Input}
                secureTextEntry
                placeholder="Enter password"
              />
            </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellTxt}>Employee Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.Input}
                secureTextEntry
                placeholder="Enter employee number"
              />
            </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellTxt}>Station</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.Input}
                secureTextEntry
                placeholder="Enter your station"
              />
            </View>
          </View>
          <View style={styles.inputButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Text style={styles.btnTxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default EditProfileScreen;
