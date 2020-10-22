import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class LinkGrid extends PureComponent {
  render() {
    const {image, title, onPressLink} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressLink} style={styles.button}>
          <ImageBackground source={{uri: image}} style={styles.image}>
            <Text style={styles.title}>{title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

LinkGrid.propTypes = {
  style: PropTypes.any,
};

LinkGrid.defaultProps = {
  style: {},
};

export default LinkGrid;
