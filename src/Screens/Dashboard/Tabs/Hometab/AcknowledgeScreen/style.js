import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: 40,
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
  Icon: {
    height: 25,
    width: 25,
  },
  button: {
    width: '85%',
    backgroundColor: '#E23E1F',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: height * 0.02,
  },
  ReportButton: {
    width: '85%',
    backgroundColor: 'transparent',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: height * 0.0,
    borderWidth: 1,
    borderColor: '#E23E1F',
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
  ReportbtnTxt: {
    color: '#E23E1F',
    fontSize: 16,
  },
});

export default styles;
