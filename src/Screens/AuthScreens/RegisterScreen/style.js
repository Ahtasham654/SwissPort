import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    marginTop: '3%',
    resizeMode: 'contain',
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
  Icon: {
    height: 25,
    width: 25,
  },
  Heading: {
    fontSize: 26,
    fontWeight: '500',
    marginTop: -30,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
  },
  LoginContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  cell: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  cellTxt: {
    fontWeight: '600',
  },
  inputContainer: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginTop: 5,
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
    marginVertical: 10,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
});

export default style;
