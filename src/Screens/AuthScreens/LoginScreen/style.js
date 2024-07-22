import {StyleSheet} from 'react-native';

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
  Heading: {
    fontSize: 26,
    fontWeight: '500',
    marginTop: -30,
  },
  LoginContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 20,
    width: '80%',
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  cellTxt: {
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
  ForgotTxt: {
    paddingVertical: 10,
    alignSelf: 'flex-end',
    fontWeight: '600',
  },
  AccountTxt: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
  },
  FaceIdButtonContanier: {
    alignItems: 'center',
    marginVertical: 20,
  },
  FaceIdButton: {
    width: '30%',
    height: 90,
    backgroundColor: '#fcece8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E23E1F',
  },
  FaceIdTxt: {
    fontSize: 9,
    color: '#E23E1F',
    marginVertical: 5,
    fontWeight: '600',
  },
  FeceIdIcon: {
    height: 30,
    width: 30,
  },
});

export default style;
