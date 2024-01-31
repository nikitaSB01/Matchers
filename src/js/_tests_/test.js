import lifePlayer from '../app';

test('lifePlayer function return text value', () => {
  const healthy = lifePlayer({ name: 'Маг', health: 90 });
  const wounded = lifePlayer({ name: 'Маг', health: 40 });
  const critical = lifePlayer({ name: 'Маг', health: 10 });
  const errorValue = lifePlayer(undefined);
  const errorValueHealth = lifePlayer({ name: 'Маг', health: '10o' });

  expect(healthy).toBe('healthy');
  expect(wounded).toBe('wounded');
  expect(critical).toBe('critical');
  expect(errorValue).toBe('Передано некорректное значение');
  expect(errorValueHealth).toBe('Значение health некорректное');
});

/* let arr = [];
const players = [
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 80 }, 'healthy'],
];
arr = players.sort((a, b) => {
  if (a.health > b.health) {
    return -1;
  }
  return arr;
});
test.each(arr)('testing life players status and amount', (object, sos) => {
  const result = lifePlayer(object);
  expect(result).toEqual(sos);
}); */
