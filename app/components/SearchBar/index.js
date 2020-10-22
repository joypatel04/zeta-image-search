import React from 'react';
import {TextInput} from 'react-native';

import Row from '../Row';
import styles from './styles';

const SeachHeader = () => (
  <Row style={styles.rowWrapper}>
    <TextInput placeholder="Search" style={styles.input} />
  </Row>
);

export default SeachHeader;
