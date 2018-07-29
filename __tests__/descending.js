import { descending, sort } from '../src';

test('Sorts descending with no params', () => {
  const input = [9, 3, 6, 5, 8, 5, 10];
  const output = [10, 9, 8, 6, 5, 5, 3];
  expect(sort(input, descending())).toEqual(output);
});

test('Sorts descending with a key', () => {
  const input = [1, 5, 3, 7, 3, 6, 2].map(i => ({ a: i }));
  const output = [7, 6, 5, 3, 3, 2, 1].map(i => ({ a: i }));
  expect(sort(input, descending('a'))).toEqual(output);
});

test('Sorts descending on a nested key', () => {
  const input = [4, 4, 7, 2, 1].map(i => ({ a: { b: i } }));
  const output = [7, 4, 4, 2, 1].map(i => ({ a: { b: i } }));
  expect(sort(input, descending('a.b'))).toEqual(output);
});

test('Sorts descending without invocation', () => {
  const input = [3, 1, 6, 2, 4, 5];
  const output = [6, 5, 4, 3, 2, 1];
  expect(sort(input, descending)).toEqual(output);
});
