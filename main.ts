type Object = Record<string, any>
type Filter = Function
type Keys = Set<string> | Array<string>

export function filter(object: Object, fn: Filter): Object {
  const result: Object = { }

  for (const key in object)
    if (fn(key, object[key], object))
      result[key] = object[key]

  return result
}

export function includeKeys(object: Object, keys: Keys): Object {
  const result: Object = { }

  for (const key of keys)
    if (key in object)
      result[key] = object[key]
  
  return result
}
export function excludeKeys(object: Object, keys: Keys): Object {
  const result: Object = { }
  const list = new Set(keys)

  for (const key in object)
    if (!list.has(key))
      result[key] = object[key]
  
  return result
}
