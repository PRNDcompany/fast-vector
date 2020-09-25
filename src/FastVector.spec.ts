import FastVector from './FastVector';

describe('FastVector', () => {
  it('constructor', () => {
    const a = new FastVector();

    expect(a.x).toEqual(0);
    expect(a.y).toEqual(0);
  });

  it('fromObject', () => {
    const a = FastVector.fromObject({ x: 1, y: 1 });

    expect(a.x).toEqual(1);
    expect(a.y).toEqual(1);
  });

  it('fromArray', () => {
    const a = FastVector.fromArray([1, 1]);

    expect(a.x).toEqual(1);
    expect(a.y).toEqual(1);
  });

  it('add', () => {
    const a = new FastVector(5, 10);
    const b = new FastVector(10, 15);
    const result1 = FastVector.add(a, b);
    const result2 = a.add(b);
    const result3 = a.add(10);
    const result4 = a.add(5, 10);

    expect(result1.x).toEqual(15);
    expect(result1.y).toEqual(25);
    expect(result2.x).toEqual(15);
    expect(result2.y).toEqual(25);
    expect(result3.x).toEqual(15);
    expect(result3.y).toEqual(10);
    expect(result4.x).toEqual(10);
    expect(result4.y).toEqual(20);
  });

  it('sub', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 15);
    const result1 = FastVector.sub(a, b);
    const result2 = a.sub(b);
    const result3 = a.sub(10);
    const result4 = a.sub(5, 10);

    expect(result1.x).toEqual(5);
    expect(result1.y).toEqual(-5);
    expect(result2.x).toEqual(5);
    expect(result2.y).toEqual(-5);
    expect(result3.x).toEqual(0);
    expect(result3.y).toEqual(10);
    expect(result4.x).toEqual(5);
    expect(result4.y).toEqual(0);
  });

  it('mul', () => {
    const a = new FastVector(10, 10);
    const result1 = a.mul(10);

    expect(result1.x).toEqual(100);
    expect(result1.y).toEqual(100);
  });

  it('div', () => {
    const a = new FastVector(10, 10);
    const result1 = a.div(10);

    expect(result1.x).toEqual(1);
    expect(result1.y).toEqual(1);
  });

  it('distance', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 10);
    const result1 = FastVector.distance(a, b);
    const result2 = a.distance(b);
    const expected = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  it('equals', () => {
    const a = new FastVector(10, 5);
    const b = new FastVector(10.000005, 5.000005);

    expect(FastVector.equals(a, b)).toBeTruthy();
    expect(a.equals(b)).toBeTruthy();
    expect(a.x === b.x).toBeFalsy();
    expect(a.y === b.y).toBeFalsy();
  });

  it('lerp', () => {
    const a = new FastVector(10, 5);
    const b = new FastVector(100, 50);
    const result1 = FastVector.lerp(a, b, 0.5);
    const result2 = FastVector.lerp(a, b, -1);
    const result3 = FastVector.lerp(a, b, 2);
    const result4 = a.lerp(b, 0.5);
    const expected = new FastVector(a.x + (b.x - a.x) * 0.5, a.y + (b.y - a.y) * 0.5);

    expect(FastVector.equals(result1, expected)).toBeTruthy();
    expect(FastVector.equals(result2, a)).toBeTruthy();
    expect(FastVector.equals(result3, b)).toBeTruthy();
    expect(FastVector.equals(result4, result1)).toBeTruthy();
  });

  it('dot', () => {
    const a = new FastVector(10, 5);
    const b = new FastVector(100, 50);
    const result1 = FastVector.dot(a, b);
    const result2 = a.dot(b);
    const expected = a.x * b.x + a.y * b.y;

    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  it('cross', () => {
    const a = new FastVector(100, 100);
    const b = new FastVector(500, 200);
    const result1 = FastVector.cross(a, b);
    const result2 = a.cross(b);
    const expected = a.x * b.y - a.y * b.x;

    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  it('limit', () => {
    const a = new FastVector(100, 100);
    const b = new FastVector(10, 10);
    const result1 = a.limit(5);
    const result2 = b.limit(100);
    const expected = a.normalize().mul(5);

    expect(result1.equals(expected)).toBeTruthy()
    expect(result2.equals(b)).toBeTruthy();
    expect(result2 === b).toBeFalsy();
  });

  it('magnitude', () => {
    const a = new FastVector(100, 100);
    const result1 = FastVector.magnitude(a);
    const result2 = a.magnitude();
    const expected = Math.sqrt(a.x * a.x + a.y * a.y);

    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  it('magnitudeSquare', () => {
    const a = new FastVector(100, 100);
    const result1 = FastVector.magnitudeSquare(a);
    const result2 = a.magnitudeSquare();
    const expected = a.x * a.x + a.y * a.y;

    expect(result1).toEqual(expected);
    expect(result2).toEqual(expected);
  });

  it('reflect', () => {
    const a = new FastVector(-10, -10);
    const b = new FastVector(1, 0);
    const result = FastVector.reflect(a, b);
    const factor = -2 * FastVector.dot(a, b);

    expect(result.x).toEqual(factor * b.x + a.x);
    expect(result.y).toEqual(factor * b.y + a.y);
  });

  it('normalize', () => {
    const a = new FastVector(10, 10);
    const radian = Math.PI * 0.25;
    const b = new FastVector(Math.cos(radian), Math.sin(radian));

    expect(FastVector.equals(a.normalize(), b)).toBeTruthy();
    expect(FastVector.equals(FastVector.normalize(a), b)).toBeTruthy();
    expect(FastVector.equals(FastVector.normalize(new FastVector(0, 0)), FastVector.zero)).toBeTruthy();
  });

  it('intersection', () => {
    const v1 = new FastVector(50, 0);
    const v2 = new FastVector(50, 100);
    const v3 = new FastVector(0, 50);
    const v4 = new FastVector(100, 50);

    const v5 = new FastVector(0, 0);
    const v6 = new FastVector(100, 0);
    const v7 = new FastVector(0, 100);
    const v8 = new FastVector(100, 100);

    const result1 = FastVector.intersection(v1, v2, v3, v4);
    const result2 = FastVector.intersection(v5, v6, v7, v8);

    if (!result1) {
      throw Error('result1 is null.');
    }

    expect(result1.equals(new FastVector(50, 50))).toBeTruthy();
    expect(result2).toEqual(null);
  });

  it('angle', () => {
    const a = new FastVector(0, 100);
    const result1 = a.angle();

    expect(result1).toEqual(Math.PI * 0.5);
  });

  it('angleBetween', () => {
    const a = new FastVector(100, 100);
    const b = new FastVector(-100, 100);
    const result1 = a.angleBetween(b);

    expect(result1).toEqual(Math.PI * 0.5);
  });

  it('clone', () => {
    const a = new FastVector(10, 10);
    const b = a.clone();

    expect(a.equals(b)).toBeTruthy();
  });

  it('toObject', () => {
    const a = new FastVector(1, 2);

    expect(a.toObject()).toEqual({ x: 1, y: 2 });
  });

  it('toArray', () => {
    const a = new FastVector(1, 2);

    expect(a.toArray()).toEqual([1, 2]);
  });

  it('toString', () => {
    const a = new FastVector(1, 2);

    expect(a.toString()).toEqual(`(1, 2)`);
  });
});
