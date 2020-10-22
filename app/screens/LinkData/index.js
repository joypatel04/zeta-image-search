import React from 'react';
import idx from 'idx';
import {Text, Linking} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

class LinkData extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      route: {
        params: {linkData},
      },
    } = props;
    this.state = {
      linkData,
    };
  }

  render() {
    const {linkData} = this.state;
    const {
      snippet: tagLine,
      title,
      pagemap: {metatags, cse_image, cse_thumbnail},
    } = idx(linkData, (_) => _) || {
      title: '',
      snippet: '',
      pagemap: {
        metatags: [],
        cse_image: [],
        cse_thumbnail: [],
      },
    };

    const Tags = metatags && (
      <>
        {metatags[0]['og:url'] && (
          <Text style={styles.tagline}>
            {'Click on URL: '}
            <Text
              onPress={() => {
                Linking.canOpenURL(metatags[0]['og:url']).then(() => {
                  Linking.openURL(metatags[0]['og:url']);
                });
              }}
              style={[styles.tagline, styles.link]}>
              {metatags[0]['og:url']}
            </Text>
          </Text>
        )}

        {metatags[0]['analytics-track'] && (
          <Text style={styles.tagline}>
            {'Analytics track: '}
            <Text style={[styles.tagline]}>
              {metatags[0]['analytics-track']}
            </Text>
          </Text>
        )}

        {metatags[0]['og:description'] && (
          <Text style={styles.tagline}>
            {'Description: '}
            <Text style={[styles.tagline]}>
              {metatags[0]['og:description']}
            </Text>
          </Text>
        )}
      </>
    );

    return (
      <SafeAreaView style={styles.container}>
        {title && <Text style={styles.title}>{`Title: ${title}`}</Text>}
        {tagLine && <Text style={styles.tagline}>{`Snippet: ${tagLine}`}</Text>}
        {Tags}
        {cse_image && cse_image[0].src && (
          <Text style={styles.tagline}>
            {'CSE Image src: '}
            <Text
              onPress={() => {
                Linking.canOpenURL(cse_image[0].src).then(() => {
                  Linking.openURL(cse_image[0].src);
                });
              }}
              style={[styles.tagline, styles.link]}>
              {cse_image[0].src}
            </Text>
          </Text>
        )}

        {cse_thumbnail && cse_thumbnail[0].width && (
          <Text style={styles.tagline}>
            {'CSE Thumbnail Width: '}
            <Text style={[styles.tagline, styles.link]}>
              {cse_thumbnail[0].width}
            </Text>
          </Text>
        )}

        {cse_thumbnail && cse_thumbnail[0].height && (
          <Text style={styles.tagline}>
            {'CSE Thumbnail Height: '}
            <Text style={[styles.tagline, styles.link]}>
              {cse_thumbnail[0].height}
            </Text>
          </Text>
        )}

        {cse_thumbnail && cse_thumbnail[0].src && (
          <Text style={styles.tagline}>
            {'CSE Thumbnail Src: '}
            <Text
              onPress={() => {
                Linking.canOpenURL(cse_thumbnail[0].src).then(() => {
                  Linking.openURL(cse_thumbnail[0].src);
                });
              }}
              style={[styles.tagline, styles.link]}>
              {cse_thumbnail[0].src}
            </Text>
          </Text>
        )}
      </SafeAreaView>
    );
  }
}

LinkData.propTypes = {
  navigation: PropTypes.object,
};

export default LinkData;
