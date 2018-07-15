import { sort, ascending } from '../src';

test('Ensure root immutability from sort', () => {
  const input = [5, 2, 7, 4, 2];
  const output = [2, 2, 4, 5, 7];
  const result = sort(input, ascending());
  expect(result).toEqual(output); // Ensure it's correct
  expect(input).not.toBe(output); // Ensure it didn't modify original array
});
