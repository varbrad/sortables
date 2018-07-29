import { ascending, sort, hierarchical, descending } from '../src';

test('Does nothing if no arguments are passed', () => {
  const input = [4, 1, 6, 4, 8, 2];
  const output = [4, 1, 6, 4, 8, 2];
  expect(sort(input, hierarchical())).toEqual(output);
});

test('Can accept just one sort function', () => {
  const input = [9, 5, 8, 3, 6];
  const output = [3, 5, 6, 8, 9];
  expect(sort(input, hierarchical(ascending))).toEqual(output);
});

test('Additional functions are ignored if not needed', () => {
  const input = [4, 1, 5, 7, 3, 6];
  const output = [1, 3, 4, 5, 6, 7];
  expect(sort(input, hierarchical(ascending, descending))).toEqual(output);
});

test('Raw result checks', () => {
  expect(hierarchical(ascending())(1, 4)).toBe(-1);
  expect(hierarchical(ascending())(6, 2)).toBe(1);
  expect(hierarchical(ascending())(5, 5)).toBe(0);
});
