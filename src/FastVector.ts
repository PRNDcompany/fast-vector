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
  public static readonly zero = new FastVector(0, 0);
  public static readonly up = new FastVector(0, -1);
  public static readonly down = new FastVector(0, 1);
  public static readonly left = new FastVector(-1, 0);
  public static readonly right = new FastVector(1, 0);

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

  public static cross(a: FastVector, b: FastVector): number {
    return a.x * b.y - a.y * b.x;
  }

  public static reflect(i: FastVector, n: FastVector) {
    const factor = -2 * FastVector.dot(n, i);
    return new FastVector(factor * n.x + i.x, factor * n.y + i.y);
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

  public x: number;
  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public lerp(v: FastVector, t: number): FastVector {
    return FastVector.lerp(this, v, t)
  }

  public distance(v: FastVector): number {
    return FastVector.distance(this, v);
  }

  public add(v: FastVector): FastVector {
    return FastVector.add(this, v);
  }

  public sub(v: FastVector): FastVector {
    return FastVector.sub(this, v);
  }

  public mul(v: FastVector): FastVector {
    return FastVector.mul(this, v);
  }

  public div(v: FastVector): FastVector {
    return FastVector.div(this, v);
  }

  public dot(v: FastVector): number {
    return FastVector.dot(this, v);
  }

  public cross(v: FastVector): number {
    return FastVector.cross(this, v);
  }

  public equals(v: FastVector): boolean {
    return FastVector.equals(this, v);
  }

  public magnitude(): number {
    return FastVector.magnitude(this);
  }

  public normalize(): FastVector {
    return FastVector.normalize(this);
  }

  public toObject(): { x: number; y: number; } {
    return { x: this.x, y: this.y };
  }

  public toArray(): [number, number] {
    return [this.x, this.y];
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public get lengthSquare(): number {
    return this.x * this.x + this.y * this.y
  }

  public get length(): number {
    return Math.sqrt(this.lengthSquare)
  }
}

Object.freeze(FastVector.zero);
Object.freeze(FastVector.up);
Object.freeze(FastVector.down);
Object.freeze(FastVector.left);
Object.freeze(FastVector.right);
