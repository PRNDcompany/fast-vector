import FastVector from './FastVector';

describe('FastVector', () => {
  it('initialization', () => {
    const a = new FastVector();

    expect(a.x).toEqual(0);
    expect(a.y).toEqual(0);
  });

  it('add', () => {
    const a = new FastVector(5, 10);
    const b = new FastVector(10, 15);
    const result1 = FastVector.add(a, b);
    const result2 = a.add(b);

    expect(result1.x).toEqual(15);
    expect(result1.y).toEqual(25);
    expect(result2.x).toEqual(15);
    expect(result2.y).toEqual(25);
  });

  it('sub', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 15);
    const result1 = FastVector.sub(a, b);
    const result2 = a.sub(b);

    expect(result1.x).toEqual(5);
    expect(result1.y).toEqual(-5);
    expect(result2.x).toEqual(5);
    expect(result2.y).toEqual(-5);
  });

  it('mul', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 15);
    const result1 = FastVector.mul(a, b);
    const result2 = a.mul(b);

    expect(result1.x).toEqual(50);
    expect(result1.y).toEqual(150);
    expect(result2.x).toEqual(50);
    expect(result2.y).toEqual(150);
  });

  it('div', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 10);
    const result1 = FastVector.div(a, b);
    const result2 = a.div(b);

    expect(result1.x).toEqual(2);
    expect(result1.y).toEqual(1);
    expect(result2.x).toEqual(2);
    expect(result2.y).toEqual(1);
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
    const result3 = FastVector.lerp(a, b, 2 );
    const result4 = a.lerp(b, 0.5);
    const expected = new FastVector(
      a.x + (b.x - a.x) * 0.5,
      a.y + (b.y - a.y) * 0.5
    );

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

  it('magnitude', () => {
    const a = new FastVector(100, 100);
    const result1 = FastVector.magnitude(a);
    const result2 = a.magnitude();
    const expected = Math.sqrt(a.x * a.x + a.y * a.y);

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
    const b = new FastVector(Math.cos(radian), Math.sin(radian))

    expect(FastVector.equals(a.normalize(), b)).toBeTruthy()
    expect(FastVector.equals(FastVector.normalize(a), b)).toBeTruthy()
    expect(FastVector.equals(FastVector.normalize(new FastVector(0, 0)), FastVector.zero)).toBeTruthy()
  });

  it('lengthSquare', () => {
    const a = new FastVector(4, 2);

    expect(a.lengthSquare).toEqual(4 * 4 + 2 * 2);
  });

  it('length', () => {
    const a = new FastVector(4, 2);

    expect(a.length).toEqual(Math.sqrt(4 * 4 + 2 * 2));
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
})
