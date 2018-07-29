import compare from './compare';
import resolveKey from './resolveKey';

const fn = (a, b) => compare(a, b) * -1;

export default (...params) => {
  // If directly passed as a compare fn
  if (params.length === 2) return fn(params[0], params[1]);
  // Otherwise, a key was passed, so use that
  const key = params[0];
  if (!key) return fn;
  return (a, b) => compare(resolveKey(a, key), resolveKey(b, key)) * -1;
};
