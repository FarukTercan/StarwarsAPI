const cache = {};
async function cachedFetch(url) {
  if (cache[url]) {
    return cache[url];
  }
  const res = await fetch(url);
  cache[url] = await res.json();
  return cache[url];
}
export default cachedFetch;
