export default function lifePlayer(player) {
  let result = '';
  if (player.health > 50) {
    result = 'healthy';
  } if (player.health >= 15 && player.health < 50) {
    result = 'wounded';
  } if (player.health < 15) {
    result = 'critical';
  }
  return result;
}
