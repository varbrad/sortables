import compare from './compare';

export default key => {
  if (!key) return (a, b) => compare(a, b) * -1;
  else return (a, b) => compare(a[key], b[key]) * -1;
};
