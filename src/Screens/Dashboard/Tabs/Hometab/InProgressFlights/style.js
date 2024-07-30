import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -30,
    width: '100%',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  placeholder: {
    width: 25,
    height: 25,
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },
  icon: {
    height: 25,
    width: 25,
  },
  flightStatusContainer: {
    width: '92%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  secondContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignContent: 'center',
    width: '100%',
  },
  dateColumn: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
  },
  boldTxt: {
    fontWeight: '600',
    fontSize: 16,
  },
  normalTxt: {
    marginTop: 10,
  },
  button: {
    width: '45%',
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

export default styles;
