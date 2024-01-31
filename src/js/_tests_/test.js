  import lifePlayer from "../app";
const players = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];
let arr = players.sort((a, b) => {
  if (a["health"] > b["health"]) {
    return -1;
  }
});
//  console.log(arr);

test.each(arr)("testing life player %s status and %i amount", (amount, exp) => {
  const result = lifePlayer(amount);
  expect(result).toEqual(exp);
});

/* 
test('lifePlayer', () => {
  const player = { name: 'Маг', health: 90 };
  const result = lifePlayer(player);
  expect(result).toBe('healthy');
});
test('lifePlayer', () => {
  const player = { name: 'Маг', health: 30 };
  const result = lifePlayer(player);
  expect(result).toBe('wounded');
});
test('lifePlayer', () => {
  const player = { name: 'Маг', health: 10 };
  const result = lifePlayer(player);
  expect(result).toBe('critical');
}); */
