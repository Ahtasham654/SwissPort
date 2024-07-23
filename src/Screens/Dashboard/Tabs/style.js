import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  tabBarStyle: {
    borderTopWidth: 0,
    height: 70,
    elevation: 5,
    backgroundColor: 'transparent',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#E23E1F',
  },
  activeTabButtonBorder: {
    paddingBottom: 2,
  },
});

export default styles;
