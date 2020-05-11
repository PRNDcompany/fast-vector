export default class FastVector {
    static epsilon: number;
    static lerp(a: FastVector, b: FastVector, t: number): FastVector;
    static distance(a: FastVector, b: FastVector): number;
    static add(a: FastVector, b: FastVector): FastVector;
    static sub(a: FastVector, b: FastVector): FastVector;
    static mul(a: FastVector, b: FastVector): FastVector;
    static div(a: FastVector, b: FastVector): FastVector;
    static dot(a: FastVector, b: FastVector): number;
    static reflect(a: FastVector, b: FastVector): FastVector;
    static equals(a: FastVector, b: FastVector): boolean;
    static magnitude(a: FastVector): number;
    static normalize(a: FastVector): FastVector;
    static toObject(a: FastVector): {
        x: number;
        y: number;
    };
    static toArray(a: FastVector): [number, number];
    static toString(a: FastVector): string;
    x: number;
    y: number;
    constructor(x?: number, y?: number);
}
