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
    // marginTop: '0%',
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
    marginHorizontal: 0,
    gap: 5,
  },
  coloredText: {
    color: '#E23E1F',
    fontSize: 22,
    fontWeight: '700',
  },
  cardContainer: {
    position: 'relative',
    marginTop: 20,
  },
  ItemImage: {
    width: 350,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: 'rgba(255, 99, 71, 0.1)',
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  overlayIcon: {
    height: 24,
    width: 24,
    marginTop: 10,
  },
});

export default styles;
