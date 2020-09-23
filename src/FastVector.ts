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

  public static fromObject(obj: { x: number; y: number }): FastVector {
    return new FastVector(obj.x, obj.y);
  }

  public static fromArray(arr: [number, number]): FastVector {
    return new FastVector(arr[0], arr[1]);
  }

  public static lerp(a: FastVector, b: FastVector, t: number): FastVector {
    t = clamp01(t);
    return new FastVector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
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

  public static mul(a: FastVector, x: number, y?: number): FastVector {
    return new FastVector(a.x * x, a.y * (y || x));
  }

  public static div(a: FastVector, x: number, y?: number): FastVector {
    return new FastVector(a.x / x, a.y / (y || x));
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
    return dx * dx + dy * dy < FastVector.epsilon * FastVector.epsilon;
  }

  public static magnitude(vector: FastVector): number {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  }

  public static normalize(vector: FastVector): FastVector {
    const magnitude = FastVector.magnitude(vector);

    if (magnitude > FastVector.epsilon) {
      return new FastVector(vector.x / magnitude, vector.y / magnitude);
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

  public clone(): FastVector {
    return new FastVector(this.x, this.y);
  }

  public lerp(vector: FastVector, t: number): FastVector {
    return FastVector.lerp(this, vector, t);
  }

  public distance(vector: FastVector): number {
    return FastVector.distance(this, vector);
  }

  public add(vector: FastVector): FastVector {
    return FastVector.add(this, vector);
  }

  public sub(vector: FastVector): FastVector {
    return FastVector.sub(this, vector);
  }

  public mul(value: number): FastVector
  public mul(x: number, y?: number): FastVector {
    return FastVector.mul(this, x, y);
  }

  public div(value: number): FastVector
  public div(x: number, y?: number): FastVector {
    return FastVector.div(this, x, y);
  }

  public dot(vector: FastVector): number {
    return FastVector.dot(this, vector);
  }

  public cross(vector: FastVector): number {
    return FastVector.cross(this, vector);
  }

  public equals(vector: FastVector): boolean {
    return FastVector.equals(this, vector);
  }

  public magnitude(): number {
    return FastVector.magnitude(this);
  }

  public normalize(): FastVector {
    return FastVector.normalize(this);
  }

  public toObject(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  public toArray(): [number, number] {
    return [this.x, this.y];
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public lengthSquare(): number {
    return this.x * this.x + this.y * this.y;
  }

  public length(): number {
    return Math.sqrt(this.lengthSquare());
  }
}

Object.freeze(FastVector.zero);
Object.freeze(FastVector.up);
Object.freeze(FastVector.down);
Object.freeze(FastVector.left);
Object.freeze(FastVector.right);
