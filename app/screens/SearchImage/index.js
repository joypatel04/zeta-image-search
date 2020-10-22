import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import SearchBar from '../../components/SearchBar';
import styles from './styles';

class InitialScreen extends React.Component {
  onPressHome = () => {
    const {navigation} = this.props;
    navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPressHome()}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <SearchBar />
      </View>
    );
  }
}

export default InitialScreen;
