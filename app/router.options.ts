import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from) {
    if (to.name == 'item-id' && from.name == 'item-id') {
      return {};
    }
    return {
      top: 0
    };
  }
};
