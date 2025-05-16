# `fil-obj`
`fil-obj` can help you filter an object by keys or a function.

## Installation
```
npm i fil-obj
```

## Usage
```
const { filter, includeKeys, excludeKeys } = require('fil-obj')
// import { filter, includeKeys, excludeKeys } from 'fil-obj'

const object = { a: true, b: false }

toFiltered(object, key => key === 'a') // { a: true }
includeKeys(object, [ 'a' ]) // { a: true }
excludeKeys(object, [ 'a' ]) // { b: false }
```

## API
```
keepKeys(object, keys): void
includeKeys(object, keys): Record<string, any>
dropKeys(object, keys): void
excludeKeys(object, keys): Record<string, any>
filter(object, callbackFn): void
toFiltered(object, callbackFn): Record<string, any>
```

### Parameters
`object: Record<string, any>`

The object to be filtered.

`keys: Set<string> | Array<string>`

A list of keys to filter against.

`callbackFn(key: string, value: any, object: object): boolean`

A function to determine whether a property must be included.

## Contributing
Contributions are only allowed in TON:
```
UQCYqT9-ycmXE3o57Cac1sM5ntIKdjqIwP3kzWmiZik0VU_b
```
