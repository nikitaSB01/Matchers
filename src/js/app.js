export default function lifePlayer(object) {
  if (!object || !object.health) {
    return 'Передано некорректное значение';
  }
  if (object.health > 50) {
    return 'healthy';
  }
  if (object.health <= 50 && object.health > 15) {
    return 'wounded';
  }
  if (object.health <= 15) {
    return 'critical';
  }
  return 'Значение health некорректное';
}
