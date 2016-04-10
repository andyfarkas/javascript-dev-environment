export function clone(obj, extendBy = {}) {
  return JSON.parse(JSON.stringify(Object.assign({}, obj, extendBy)));
}
