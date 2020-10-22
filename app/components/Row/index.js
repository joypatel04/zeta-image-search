import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Row extends PureComponent {
  render() {
    const {children, style} = this.props;
    return <View style={[styles.row, style]}>{children}</View>;
  }
}

Row.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};

Row.defaultProps = {
  style: {},
};

export default Row;
