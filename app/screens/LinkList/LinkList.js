import React from 'react';
import idx from 'idx';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import LinkGrid from '../../components/LinkGrid';
import {noImageFound} from '../../assets';
import styles from './styles';

const LinkList = ({images, navigation}) => {
  const items = idx(images, (_) => _.items) || [];

  const onPressLink = (linkData) => {
    navigation.navigate('LinkData', {linkData});
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        initialNumToRender={4}
        maxToRenderPerBatch={2}
        keyExtractor={(item) => item.cacheId}
        renderItem={({item}) => {
          const {title, link, cacheId, pagemap} = idx(item, (_) => _) || {};
          const {cse_image, imageobject, metatags} = idx(pagemap, (_) => _) || {
            cse_image: null,
            imageobject: null,
            metatags: null,
          };
          const image =
            (metatags && metatags[0]['og:image']) ||
            (cse_image && cse_image[0].src) ||
            (imageobject && imageobject[0].url) ||
            noImageFound;
          console.log('image', image);
          return (
            <LinkGrid
              cacheId={cacheId}
              title={title}
              link={link}
              image={image}
              onPressLink={() => onPressLink(item)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

LinkList.propTypes = {
  images: PropTypes.object,
  navigation: PropTypes.object,
};

export default LinkList;
