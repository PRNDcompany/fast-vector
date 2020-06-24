# fast-vector
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
