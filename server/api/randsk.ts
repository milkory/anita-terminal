const storage = useStorage('assets:server');

export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/json');
  const query = getQuery(event);
  const type = query.type || 'single';
  if (type == 'single' && query.id) {
    const id = parseInt(query.id.toString());
    const path = `/data/randsk/${id}.json`;
    if (await storage.hasItem(path)) {
      return await storage.getItem(path);
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: 'requested assets not found'
      });
    }
  }
  throw createError({
    statusCode: 400,
    statusMessage: 'invalid request'
  });
});
