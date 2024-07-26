import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -30,
    width: '100%',
  },
  HeaderText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  Placeholder: {
    width: 25,
    height: 25,
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },
  LogoutIcon: {
    height: 25,
    width: 25,
  },
  Icon: {
    height: 25,
    width: 25,
  },
  SubHeaderText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#65656B',
    width: '90%',
  },
  AirplaneImage: {
    height: 250,
    width: 300,
    marginTop: 30,
  },
  Content: {
    flex: 1,
    width: '95%',
    padding: 20,
  },
  ItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 10,
  },
  ItemText: {
    fontSize: 16,
    flex: 2,
    paddingRight: 10,
  },
  Button: {
    backgroundColor: '#ffcccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  ButtonText: {
    color: 'red',
    fontWeight: '600',
  },
  PreviewImage: {
    height: 40,
    width: 40,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  SubmitButton: {
    backgroundColor: '#E23E1F',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  SubmitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
