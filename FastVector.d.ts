export default class FastVector {
    static readonly zero: FastVector;
    static readonly up: FastVector;
    static readonly down: FastVector;
    static readonly left: FastVector;
    static readonly right: FastVector;
    static epsilon: number;
    static lerp(a: FastVector, b: FastVector, t: number): FastVector;
    static distance(a: FastVector, b: FastVector): number;
    static add(a: FastVector, b: FastVector): FastVector;
    static sub(a: FastVector, b: FastVector): FastVector;
    static mul(a: FastVector, b: FastVector): FastVector;
    static div(a: FastVector, b: FastVector): FastVector;
    static dot(a: FastVector, b: FastVector): number;
    static cross(a: FastVector, b: FastVector): number;
    static reflect(i: FastVector, n: FastVector): FastVector;
    static equals(a: FastVector, b: FastVector): boolean;
    static magnitude(a: FastVector): number;
    static normalize(a: FastVector): FastVector;
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    toObject(): {
        x: number;
        y: number;
    };
    toArray(): [number, number];
    toString(): string;
    get lengthSquare(): number;
    get length(): number;
}
