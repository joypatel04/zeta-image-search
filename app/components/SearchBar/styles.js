import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {lightShadow, white, black} from 'color';

const styles = StyleSheet.create({
  rowWrapper: {
    width: wp('95%'),
    height: hp('7%'),
    marginVertical: hp('2%'),
    borderRadius: wp('15%'),
    backgroundColor: white,
    shadowColor: lightShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
  input: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: black,
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
});

export default styles;
