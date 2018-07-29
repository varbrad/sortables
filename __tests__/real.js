import { descending, hierarchical, sort, ascending } from '../src';

const data = [
  {
    name: 'London',
    population: 8800000,
    elevation: 35,
    continent: 'Europe'
  },
  {
    name: 'Melbourne',
    population: 4900000,
    elevation: 31,
    continent: 'Oceania'
  },
  {
    name: 'New York City',
    population: 8200000,
    elevation: 10,
    continent: 'North America'
  },
  {
    name: 'Istanbul',
    population: 15000000,
    elevation: 39,
    continent: 'Europe'
  },
  {
    name: 'Buenos Aires',
    population: 2900000,
    elevation: 25,
    continent: 'South America'
  }
];

test('Test Case 1', () => {
  const result = sort(data, descending('population')).map(city => city.name);
  expect(result).toEqual([
    'Istanbul',
    'London',
    'New York City',
    'Melbourne',
    'Buenos Aires'
  ]);
});

test('Test Case 2', () => {
  const result = sort(data, ascending('name')).map(city => city.name);
  expect(result).toEqual([
    'Buenos Aires',
    'Istanbul',
    'London',
    'Melbourne',
    'New York City'
  ]);
});

test('Test Case 3', () => {
  const result = sort(
    data,
    hierarchical(ascending('continent'), descending('elevation'))
  ).map(city => city.name);
  expect(result).toEqual([
    'Istanbul',
    'London',
    'New York City',
    'Melbourne',
    'Buenos Aires'
  ]);
});
