import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '3%',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },
  Icon: {
    height: 25,
    width: 25,
  },
  HeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
    justifyContent: 'center',
  },
  BackIcon: {
    height: 25,
    width: 25,
    alignItems: 'left',
    marginTop: -15,
  },
  Heading: {
    fontSize: 26,
    fontWeight: '500',
    marginTop: -20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
  },
  LoginContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  Input: {
    flex: 1,
    height: 50,
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
    marginVertical: 20,
    marginBottom: 20,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
