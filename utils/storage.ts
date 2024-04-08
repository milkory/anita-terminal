export function getLocalStorage(key?: string): any {
  const root = JSON.parse(localStorage.getItem('anita') ?? '{}');
  return key ? root[key] ?? {} : root;
}

export function setLocalStorage(key: string, value: object) {
  const store = getLocalStorage();
  store[key] = value;
  localStorage.setItem('anita', JSON.stringify(store));
}

export function setLastView(page: string, value?: string) {
  const store = getLocalStorage('lastView');
  store['.'] = page + (value ? `/${value}` : '');
  store[page] = value;
  setLocalStorage('lastView', store);
}

export function getLastView(page: string = '.'): string | null {
  return getLocalStorage('lastView')[page];
}
