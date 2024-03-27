const storage = useStorage('assets:server');

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/json');
  const query = getQuery(event);
  if (query.id) {
    const path = `data/char/${query.id}.json`;
    if (await storage.hasItem(path)) {
      return await useStorage('assets:server').getItem(path);
    }
  }
  return {};
});
