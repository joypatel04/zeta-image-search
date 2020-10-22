export function googleImages(client) {
  return {
    searchImages({querySearch}) {
      return client.get(`&q=${querySearch}`);
    },
  };
}
