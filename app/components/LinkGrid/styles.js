import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {scale} from '../../themes/scaler';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(20),
  },
  button: {
    width: wp('90%'),
    aspectRatio: 2 / 1,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(13),
    height: 'auto',
    backgroundColor: colors.white,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: scale(10),
    textAlign: 'left',
  },
});

export default styles;
