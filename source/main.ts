type Object = Record<string, any>
type Filter = Function
type Keys = Set<string> | Array<string>

export function filter(object: Object, fn: Filter): void {
  for (const key in object)
    if (!fn(key, object[key], object)) delete object[key]
}
export function toFiltered(object: Object, fn: Filter): Object {
  const result: Object = { }

  for (const key in object)
    if (fn(key, object[key], object))
      result[key] = object[key]

  return result
}

export function keepKeys(object: Object, keys: Keys): void {
  const list = new Set(keys)
  for (const key in object)
    if (!list.has(key)) delete object[key]
}
export function includeKeys(object: Object, keys: Keys): Object {
  const result: Object = { }

  for (const key of keys)
    if (key in object)
      result[key] = object[key]
  
  return result
}

export function dropKeys(object: Object, keys: Keys): void {
  const list = new Set(keys)
  for (const key in object)
    if (list.has(key)) delete object[key]
}
export function excludeKeys(object: Object, keys: Keys): Object {
  const result: Object = { }
  const list = new Set(keys)

  for (const key in object)
    if (!list.has(key))
      result[key] = object[key]
  
  return result
}
