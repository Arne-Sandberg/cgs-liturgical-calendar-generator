import { toTotals } from './Arcs';

it('calculates totals', () => {
  const input = [1, 1, 1, 1, 1];
  const output = toTotals(input);

  expect(output).toEqual([1, 2, 3, 4, 5]);
});

