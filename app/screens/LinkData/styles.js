import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from '../../themes/scaler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: scale(16),
    marginTop: scale(44),
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: scale(10),
  },
  tagline: {
    fontWeight: '600',
    marginBottom: scale(10),
  },
  link: {
    color: colors.primaryDark,
  },
});

export default styles;
