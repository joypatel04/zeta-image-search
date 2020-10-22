import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {scale} from '../../themes/scaler';
import {lightShadow, white, darkCharcole} from '../../themes/colors';

const styles = StyleSheet.create({
  rowWrapper: {
    marginTop: scale(100),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: scale(24),
    borderColor: lightShadow,
    borderWidth: StyleSheet.hairlineWidth,
    width: wp('90%'),
  },
  inputStyle: {
    width: scale(250),
    minHeight: scale(48),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    fontSize: scale(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: darkCharcole,
    padding: 5,
  },
});

export default styles;
