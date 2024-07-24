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
    // marginTop: '2%',
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
  HeadingRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    marginTop: -40,
  },
  coloredText: {
    fontSize: 22,
    fontWeight: '700',
  },
  SectionContainer: {
    width: '90%',
    marginTop: 30,
  },
  Divider: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    marginTop: 20,
  },
  SectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
  },
  SectionItem: {
    flexDirection: 'row',
    gap: 10,
  },
  SectionIcon: {
    height: 20,
    width: 20,
  },
  SmallIcon: {
    height: 15,
    width: 15,
  },
});

export default styles;
