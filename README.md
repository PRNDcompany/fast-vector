# fast-vector
🤪 A Vector class for TypeScript or JavaScript.

[![Actions Status](https://github.com/PRNDcompany/fast-vector/workflows/build/badge.svg)](https://github.com/PRNDcompany/fast-vector/actions)
[![codecov](https://codecov.io/gh/PRNDcompany/fast-vector/branch/master/graph/badge.svg)](https://codecov.io/gh/PRNDcompany/fast-vector)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![https://nodei.co/npm/fast-vector.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/fast-vector.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-vector)

## Instalation
```shell script
yarn add fast-vector
```

## Usage
```typescript
import FastVector from 'fast-vector';

// add
const a1 = new FastVector(50, 30);
const b1 = new FastVector(10, 20);
const c1 = a1.add(b1);

// div
const a2 = new FastVector(50, 30);
const b2 = new FastVector(10, 20);
const c2 = a2.div(b2);

// normalize
const a3 = new FastVector(50, 30);
const norm = a3.normalize();

// linear interpolation
const a4 = FastVector.lerp(a1, b1, 0.5);
```

## Methods

`.clone(): FastVector`

`.add(v: FastVector): FastVector`

`.sub(v: FastVector): FastVector`

`.mul(v: FastVector): FastVector`

`.div(v: FastVector): FastVector`

`.dot(v: FastVector): number`

`.lerp(v: FastVector, t: number): FastVector`

`.cross(v: FastVector): number`

`.reflect(i: FastVector, n: FastVector): FastVector`

`.equals(v: FastVector): boolean`

`.distance(v: FastVector): number`

`.length(): number`

`.lengthSquare(): number`

`.magnitude(): number`

`.normalize(): FastVector`

`.toObject(): { x: number; y: number }`

`.toArray(): [number, number]`

`.toString(): string`

## Static Methods and Variables

`FastVector.fromObject(obj: { x: number; y: number }): FastVector`

`FastVector.fromArray(arr: [number, number]): FastVector`

`FastVector.zero = new FastVector(0, 0)`

`FastVector.up = new FastVector(0, -1)`

`FastVector.down = new FastVector(0, 1)`

`FastVector.left = new FastVector(-1, 0)`

`FastVector.right = new FastVector(1, 0)`

`FastVector.epsilon = 0.00001`

`FastVector.add(a: FastVector, b: FastVector): FastVector`

`FastVector.sub(a: FastVector, b: FastVector): FastVector`

`FastVector.mul(a: FastVector, b: FastVector): FastVector`

`FastVector.div(a: FastVector, b: FastVector): FastVector`

`FastVector.dot(a: FastVector, b: FastVector): number`

`FastVector.lerp(a: FastVector, b: FastVector, t: number): FastVector`

`FastVector.cross(a: FastVector, b: FastVector): number`

`FastVector.equals(a: FastVector, b: FastVector): boolean`

`FastVector.distance(a: FastVector, b: FastVector): number`

`FastVector.magnitude(v: FastVector): number`

`FastVector.normalize(v: FastVector): FastVector`
