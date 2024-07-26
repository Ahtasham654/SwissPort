import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from './style';
import Images from '../../../../../utlis/Images';
import {useNavigation} from '@react-navigation/native';
import briefingPoints from '../../../../../utlis/BriefingContent';

const BriefingScreen = () => {
  const navigation = useNavigation();
  const [toggles, setToggles] = useState(
    Array(briefingPoints.length).fill(false),
  );
  const [isAllToggled, setIsAllToggled] = useState(false);

  const handleToggle = index => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  useEffect(() => {
    setIsAllToggled(toggles.every(toggle => toggle));
  }, [toggles]);

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
        <Text style={styles.HeaderText}>Briefing</Text>
        <View style={styles.Placeholder} />
      </View>
      <ScrollView style={styles.Content} showsVerticalScrollIndicator={false}>
        {briefingPoints.map((point, index) => (
          <View key={index} style={styles.PointRow}>
            <View style={styles.Dot} />
            <Text style={styles.PointText}>{point}</Text>
            <ToggleSwitch
              isOn={toggles[index]}
              onColor="red"
              offColor="gray"
              size="medium"
              onToggle={() => handleToggle(index)}
            />
          </View>
        ))}
        <View style={styles.SignatureSection}>
          <Text style={styles.SignatureText}>Signature</Text>
          <View style={styles.SignatureBox}>
            <TextInput style={styles.SignatureInput} placeholder="Sign here" />
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.ArrivalButton,
            {backgroundColor: isAllToggled ? '#E23E1F' : 'gray'},
          ]}
          onPress={() => navigation.navigate('ArrivalScreen')}
          disabled={!isAllToggled}>
          <Text style={styles.ArrivalButtonText}>Arrival</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BriefingScreen;
