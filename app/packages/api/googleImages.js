import Config from '../../utils/config';

export function googleImages(client) {
  return {
    searchImages({querySearch}) {
      return client.get(
        `v1?key=${Config.GOOGLE_API_KEY}&cx=${Config.GOOGLE_CX}&q=${querySearch}`,
      );
    },
  };
}
