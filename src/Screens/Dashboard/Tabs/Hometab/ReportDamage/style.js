import {StyleSheet} from 'react-native';

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
  Subtitle: {
    marginVertical: 8,
    color: '#65656B',
  },
  TakePictureButton: {
    width: '90%',
    height: 120,
    backgroundColor: '#FBEDED',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 40,
  },
  CameraIcon: {
    height: 30,
    width: 30,
    marginBottom: 10,
  },
  TakePictureText: {
    fontSize: 16,
    color: '#E23E1F',
  },
  DescriptionInput: {
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
  },
  CloseFlightButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#E23E1F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  CloseFlightText: {
    fontSize: 18,
    color: 'white',
  },
});

export default styles;
