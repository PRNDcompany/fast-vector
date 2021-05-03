# fast-vector
🚀 FastVector is a library for working with Vector2 in Javascript.

[![Actions Status](https://github.com/PRNDcompany/fast-vector/workflows/build/badge.svg)](https://github.com/PRNDcompany/fast-vector/actions)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)](https://www.npmjs.com/package/fast-vector)
[![codecov](https://codecov.io/gh/PRNDcompany/fast-vector/branch/master/graph/badge.svg)](https://codecov.io/gh/PRNDcompany/fast-vector)
[![Package Quality](https://npm.packagequality.com/shield/fast-vector.svg)](https://packagequality.com/#?package=fast-vector)
[![NPM](https://img.shields.io/npm/v/fast-vector.svg)](https://www.npmjs.com/package/fast-vector)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation
```shell script
yarn add fast-vector
```

## Usage
```typescript
import FastVector from 'fast-vector';

// add
const a1 = new FastVector(50, 30);
const b1 = new FastVector(10, 20);
const c1 = a1.add(10, 5);

// sub
const a2 = new FastVector(50, 30);
const b2 = new FastVector(10, 20);
const c2 = a1.sub(b1);

// div
const a3 = new FastVector(50, 30);
const c3 = a2.div(10);

// normalize
const a4 = new FastVector(50, 30);
const norm = a4.normalize();

// linear interpolation
const a5 = FastVector.lerp(a1, b1, 0.5);
```

## Methods

`.clone(): FastVector`

`.add(x: FastVector | number, y?: number): FastVector`

`.sub(x: FastVector | number, y?: number): FastVector`

`.mul(value: number): FastVector`

`.mul(x: number, y?: number): FastVector`

`.div(value: number): FastVector`

`.div(x: number, y?: number): FastVector`

`.dot(vector: FastVector): number`

`.lerp(vector: FastVector, t: number): FastVector`

`.cross(vector: FastVector): number`

`.angle(): number`

`.angleBetween(vector: FastVector): number`

`.limit(length: number): FastVector`

`.reflect(i: FastVector, n: FastVector): FastVector`

`.equals(vector: FastVector): boolean`

`.distance(vector: FastVector): number`

`.magnitude(): number`

`.magnitudeSquare(): number`

`.normalize(): FastVector`

`.toObject(): { x: number; y: number }`

`.toArray(): [number, number]`

`.toString(): string`

`FastVector.fromObject(obj: { x: number; y: number }): FastVector`

`FastVector.fromArray(arr: [number, number]): FastVector`

`FastVector.zero = new FastVector(0, 0)`

`FastVector.up = new FastVector(0, -1)`

`FastVector.down = new FastVector(0, 1)`

`FastVector.left = new FastVector(-1, 0)`

`FastVector.right = new FastVector(1, 0)`

`FastVector.epsilon = 0.00001`

`FastVector.add(a: FastVector, x: FastVector | number, y?: number): FastVector`

`FastVector.sub(a: FastVector, x: FastVector | number, y?: number): FastVector`

`FastVector.mul(a: FastVector, value: number): FastVector`

`FastVector.mul(a: FastVector, x: number, y?: number): FastVector`

`FastVector.div(a: FastVector, value: number): FastVector`

`FastVector.div(a: FastVector, x: number, y?: number): FastVector`

`FastVector.dot(a: FastVector, b: FastVector): number`

`FastVector.lerp(a: FastVector, b: FastVector, t: number): FastVector`

`FastVector.cross(a: FastVector, b: FastVector): number`

`FastVector.angle(vector: FastVector): number`

`FastVector.angleBetween(a: FastVector, b: FastVector): number`

`FastVector.limit(vector: FastVector, length: number): FastVector`

`FastVector.equals(a: FastVector, b: FastVector): boolean`

`FastVector.distance(a: FastVector, b: FastVector): number`

`FastVector.magnitude(vector: FastVector): number`

`FastVector.magnitudeSquare(vector: FastVector): number`

`FastVector.normalize(vector: FastVector): FastVector`
