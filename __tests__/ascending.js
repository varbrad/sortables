import { ascending, sort } from '../src';

test('Sorts ascending with no params', () => {
  const input = [4, 1, 6, 3];
  const output = [1, 3, 4, 6];
  expect(sort(input, ascending())).toEqual(output);
});

test('Sorts ascending with a key', () => {
  const input = [1, 5, 3, 7, 3, 6, 2].map(i => ({ a: i }));
  const output = [1, 2, 3, 3, 5, 6, 7].map(i => ({ a: i }));
  expect(sort(input, ascending('a'))).toEqual(output);
});

test('Sorts ascending on a nested key', () => {
  const input = [4, 4, 7, 2, 1].map(i => ({ a: { b: i } }));
  const output = [1, 2, 4, 4, 7].map(i => ({ a: { b: i } }));
  expect(sort(input, ascending('a.b'))).toEqual(output);
});

test('Sorts ascending without invocation', () => {
  const input = [3, 1, 6, 2, 4, 5];
  const output = [1, 2, 3, 4, 5, 6];
  expect(sort(input, ascending)).toEqual(output);
});
