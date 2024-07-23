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
    height: 30,
    width: 30,
  },
  HeadingRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 30,
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
    backgroundColor: 'rgba(255, 99, 71, 0.2)', // Adjust the opacity as needed
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  overlayIcon: {
    height: 24,
    width: 24,
  },
});

export default styles;
