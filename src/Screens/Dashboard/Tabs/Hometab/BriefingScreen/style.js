import {StyleSheet} from 'react-native';

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
  Content: {
    flex: 1,
    width: '95%',
    padding: 20,
  },
  PointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  Dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'black',
    marginRight: 10,
  },
  PointText: {
    flex: 1,
    fontSize: 14,
    marginRight: 10,
  },
  SignatureSection: {
    marginTop: 20,
  },
  SignatureText: {
    fontSize: 16,
    marginBottom: 10,
  },
  SignatureBox: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  SignatureInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  ArrivalButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
  },
  ArrivalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;
