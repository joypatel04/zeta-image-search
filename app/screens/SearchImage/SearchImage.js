import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';

import SearchBar from '../../components/SearchBar';
import styles from './styles';

const SearchImage = ({getImages, isLoading, navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const onChange = (text) => {
    setSearchValue(text);
  };

  const onSearchPress = async () => {
    if (!isLoading) {
      const {response} = await getImages(searchValue);
      if (response.status === 200) {
        navigation.navigate('LinkList');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={searchValue}
        onChange={onChange}
        onSearchPress={onSearchPress}
      />
    </SafeAreaView>
  );
};

SearchImage.propTypes = {
  getImages: PropTypes.func,
  isLoading: PropTypes.bool,
  navigation: PropTypes.object,
};

export default SearchImage;
