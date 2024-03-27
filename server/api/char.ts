import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/json');
  const query = getQuery(event);
  if (query.id) {
    const file = path.join(process.cwd(), `/public/data/char/${query.id}.json`);
    if (fs.existsSync(file)) {
      return fs.readFileSync(file, 'utf-8');
    }
  }
  return {};
});
