# fast-vector
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

## Documentation
