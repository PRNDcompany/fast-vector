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

`.clone(): Vector`

`.add(v: Vector): Vector`

`.sub(v: Vector): Vector`

`.mul(v: Vector): Vector`

`.div(v: Vector): Vector`

`.dot(v: Vector): number`

`.lerp(v: Vector, t: number): Vector`

`.cross(v: Vector): number`

`.equals(v: Vector): boolean`

`.distance(v: Vector): number`

`.length(): number`

`.lengthSquare(): number`

`.magnitude(): number`

`.normalize(): Vector`

`.toObject(): { x: number; y: number }`

`.toArray(): [number, number]`

`.toString(): string`

## Static Methods and Variables

`FastVector.zero = new FastVector(0, 0)`

`FastVector.up = new FastVector(0, -1)`

`FastVector.down = new FastVector(0, 1)`

`FastVector.left = new FastVector(-1, 0)`

`FastVector.right = new FastVector(1, 0)`

`FastVector.epsilon = 0.00001`

`FastVector.add(a: Vector, b: Vector): Vector`

`FastVector.sub(a: Vector, b: Vector): Vector`

`FastVector.mul(a: Vector, b: Vector): Vector`

`FastVector.div(a: Vector, b: Vector): Vector`

`FastVector.dot(a: Vector, b: Vector): number`

`FastVector.lerp(a: Vector, b: Vector, t: number): Vector`

`FastVector.cross(a: Vector, b: Vector): number`

`FastVector.equals(a: Vector, b: Vector): boolean`

`FastVector.distance(a: Vector, b: Vector): number`

`FastVector.magnitude(v: Vector): number`

`FastVector.normalize(v: Vector): Vector`
