import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.primaryDark,
    width: 150,
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    paddingVertical: 15,
    fontSize: 16,
    color: colors.primaryDark,
  },
});

export default styles;
