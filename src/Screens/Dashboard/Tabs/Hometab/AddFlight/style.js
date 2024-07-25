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
    width: '100%',
    paddingHorizontal: 20,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -30,
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
  cell: {
    marginTop: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  cellTxt: {
    fontWeight: '600',
    fontSize: 14,
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
  Twocell: {
    marginTop: 15,
  },
  SubinputContainer: {
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: '48%',
  },
  SubInput: {
    height: 50,
    borderRadius: 10,
    // paddingHorizontal: 10,
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
