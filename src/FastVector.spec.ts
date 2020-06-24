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
    const result = FastVector.add(a, b);

    expect(result.x).toEqual(15);
    expect(result.y).toEqual(25);
  });

  it('sub', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 15);
    const result = FastVector.sub(a, b);

    expect(result.x).toEqual(5);
    expect(result.y).toEqual(-5);
  });

  it('mul', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 15);
    const result = FastVector.mul(a, b);

    expect(result.x).toEqual(50);
    expect(result.y).toEqual(150);
  });

  it('div', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 10);
    const result = FastVector.div(a, b);

    expect(result.x).toEqual(2);
    expect(result.y).toEqual(1);
  });

  it('distance', () => {
    const a = new FastVector(10, 10);
    const b = new FastVector(5, 10);
    const result = FastVector.distance(a, b);
    const expected = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

    expect(result).toEqual(expected);
  });

  it('equals', () => {
    const a = new FastVector(10, 5);
    const b = new FastVector(10.000005, 5.000005);

    expect(FastVector.equals(a, b)).toBeTruthy();
    expect(a.x === b.x).toBeFalsy();
    expect(a.y === b.y).toBeFalsy();
  });

  it('lerp', () => {
    const a = new FastVector(10, 5);
    const b = new FastVector(100, 50);
    const result1 = FastVector.lerp(a, b, 0.5);
    const result2 = FastVector.lerp(a, b, -1);
    const result3 = FastVector.lerp(a, b, 2 );
    const expected = new FastVector(
      a.x + (b.x - a.x) * 0.5,
      a.y + (b.y - a.y) * 0.5
    );

    expect(FastVector.equals(result1, expected)).toBeTruthy();
    expect(FastVector.equals(result2, a)).toBeTruthy();
    expect(FastVector.equals(result3, b)).toBeTruthy();
  });

  it('dot', () => {
    const a = new FastVector(10, 5);
    const b = new FastVector(100, 50);
    const result = FastVector.dot(a, b);
    const expected = a.x * b.x + a.y * b.y;

    expect(result).toEqual(expected);
  });

  it('dot', () => {
    const a = new FastVector(100, 100);
    const b = new FastVector(500, 200);
    const result = FastVector.cross(a, b);
    const expected = a.x * b.y - a.y * b.x;

    expect(result).toEqual(expected);
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
