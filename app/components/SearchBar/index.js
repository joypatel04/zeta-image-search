import React from 'react';
import {TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';

import Row from '../Row';
import styles from './styles';

const SeachHeader = ({
  onChange,
  value,
  autoCapitalize = 'words',
  autoFocus = false,
  onSearchPress,
}) => (
  <Row style={styles.rowWrapper}>
    <TextInput
      autoCapitalize={autoCapitalize}
      placeholder={'Search anything'}
      style={[styles.inputStyle]}
      maxLength={50}
      onChangeText={(text) => onChange(text)}
      value={value}
      autoFocus={autoFocus}
      onSubmitEditing={onSearchPress}
    />
    <Button title="Search" onPress={onSearchPress} />
  </Row>
);

SeachHeader.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onSearchPress: PropTypes.func,
};

export default SeachHeader;
