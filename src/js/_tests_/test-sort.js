import sorting from '../sort';

test('lifeBar function return text value', () => {
  const users = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const users2 = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 70 },
    { name: 'лучник', health: 70 },
  ];
  const errorValue = undefined;

  sorting(users);
  sorting(users2);
  sorting(errorValue);

  expect(users).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
  expect(users2).toEqual([
    { name: 'маг', health: 70 },
    { name: 'лучник', health: 70 },
    { name: 'мечник', health: 10 },
  ]);
  expect(errorValue).toEqual();
});
