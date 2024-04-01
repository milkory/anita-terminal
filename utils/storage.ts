export function setLastView(page: string, value?: string) {
  const store = JSON.parse(localStorage.getItem('anita') ?? '{}');
  store['.'] = `${page}/${value ?? ''}`;
  store[page] = value;
  localStorage.setItem('anita', JSON.stringify(store));
}

export function getLastView(key: string = '.'): string | null {
  const store = JSON.parse(localStorage.getItem('anita') ?? '{}');
  return store[key];
}
