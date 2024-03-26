export default function (src?: string) {
  const state = useState('background', () => '/img/bg/anita_ob.png');
  if (src) state.value = src;
  return state;
}
