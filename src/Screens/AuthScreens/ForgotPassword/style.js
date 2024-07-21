import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  Circle: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    backgroundColor: '#fcece8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  subCircle: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: (width * 0.25) / 2,
    backgroundColor: '#E23E1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIcon: {
    width: width * 0.1,
    height: width * 0.1,
  },
  ContentContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.1,
  },
  Heading: {
    fontSize: width * 0.06,
    fontWeight: '500',
    marginTop: -height * 0.04,
  },
  subHeading: {
    fontSize: width * 0.035,
    textAlign: 'center',
    color: '#65656B',
    marginTop: height * 0.02,
  },
  ForgotContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingVertical: height * 0.04,
  },
  cell: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  Input: {
    flex: 1,
    height: 50,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#E23E1F',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: height * 0.02,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
});

export default style;
