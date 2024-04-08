import { expandObject } from '~/utils/common';
import { ItemSummary } from '~/utils/item';
import { UnitSummary } from '~/utils/unit';

const storage = useStorage('assets:server');

export default defineSitemapEventHandler(async () => {
  const [char, item] = await Promise.all([
    storage
      .getItem('/data/char/summary.json')
      .then((data) => (data as UnitSummary[]).map((it) => `/char/${it.id - 10000000}`)),
    storage
      .getItem('/data/item/summary.json')
      .then((data) => (expandObject(data) as ItemSummary[]).map((it) => `/item/${it.id}`))
  ]);
  return [...char, ...item].map((it) => {
    return { loc: it };
  });
});
