import compare from './compare';
import resolveKey from './resolveKey';

export default key => {
  if (!key) return (a, b) => compare(a, b) * -1;
  else return (a, b) => compare(resolveKey(a, key), resolveKey(b, key)) * -1;
};
