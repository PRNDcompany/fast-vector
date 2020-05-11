function clamp01(value: number): number {
  if (value < 0) {
    return 0;
  } else if (value > 1) {
    return 1;
  } else {
    return value;
  }
}

export default class FastVector {
  public static epsilon = 0.00001;

  public static lerp(a: FastVector, b: FastVector, t: number): FastVector {
    t = clamp01(t);
    return new FastVector(
      a.x + (b.x - a.x) * t,
      a.y + (b.y - a.y) * t
    );
  }

  public static distance(a: FastVector, b: FastVector): number {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  public static add(a: FastVector, b: FastVector): FastVector {
    return new FastVector(a.x + b.x, a.y + b.y);
  }

  public static sub(a: FastVector, b: FastVector): FastVector {
    return new FastVector(a.x - b.x, a.y - b.y);
  }

  public static mul(a: FastVector, b: FastVector): FastVector {
    return new FastVector(a.x * b.x, a.y * b.y);
  }

  public static div(a: FastVector, b: FastVector): FastVector {
    return new FastVector(a.x / b.x, a.y / b.y);
  }

  public static dot(a: FastVector, b: FastVector): number {
    return a.x * b.x + a.y * b.y;
  }

  public static reflect(a: FastVector, b: FastVector) {
    const factor = -2 * FastVector.dot(b, a);
    return new FastVector(factor * b.x + a.x, factor * b.y + a.y);
  }

  public static equals(a: FastVector, b: FastVector): boolean {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return (dx * dx + dy * dy) < FastVector.epsilon * FastVector.epsilon;
  }

  public static magnitude(a: FastVector): number {
    return Math.sqrt(a.x * a.x + a.y * a.y);
  }

  public static normalize(a: FastVector): FastVector {
    const magnitude = FastVector.magnitude(a);

    if (magnitude > FastVector.epsilon) {
      return new FastVector(a.x / magnitude, a.y / magnitude);
    } else {
      return new FastVector(0, 0);
    }
  }

  public static toObject(a: FastVector): { x: number; y: number; } {
    return { x: a.x, y: a.y };
  }

  public static toArray(a: FastVector): [number, number] {
    return [a.x, a.y];
  }

  public static toString(a: FastVector): string {
    return `(${a.x}, ${a.y})`;
  }

  public x: number;
  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
