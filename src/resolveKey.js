export default (object, key) => {
  const fragments = key.split('.');
  if (fragments.length === 1) return object[key];
  let o = object;
  while (fragments.length > 0) {
    const fragment = fragments.shift();
    if (o.hasOwnProperty(fragment)) o = o[fragment];
    else return undefined;
  }
  return o;
};
