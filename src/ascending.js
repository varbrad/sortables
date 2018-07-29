import compare from './compare';
import resolveKey from './resolveKey';

const fn = (a, b) => compare(a, b);

export default (...params) => {
  if (params.length === 2) return fn(params[0], params[1]);
  const key = params[0];
  if (!key) return fn;
  return (a, b) => compare(resolveKey(a, key), resolveKey(b, key));
};
