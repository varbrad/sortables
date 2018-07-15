import resolveKey from '../src/resolveKey';

test('Resolves standard key', () => {
  const o = { a: 5 };
  expect(resolveKey(o, 'a')).toBe(5);
});

test('Resolves a nested key', () => {
  const o = { a: { b: 20, c: { d: 40 } } };
  expect(resolveKey(o, 'a.b')).toBe(20);
  expect(resolveKey(o, 'a.c.d')).toBe(40);
});

test('Resolves an unfound key to `undefined`', () => {
  const o = { a: 20, b: { c: 40 } };
  expect(resolveKey(o, 'c')).toBeUndefined();
  expect(resolveKey(o, 'a.b.d')).toBeUndefined();
  expect(resolveKey(o, 'a.b.c.d')).toBeUndefined();
});
