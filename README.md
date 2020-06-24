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
const a = new FastVector(50, 30);
const b = new FastVector(10, 20);
const c = FastVector.add(a, b);

// linear interpolation
const d = FastVector.lerp(a, b, 0.5);
```
