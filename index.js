"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function clamp01(value) {
    if (value < 0) {
        return 0;
    }
    else if (value > 1) {
        return 1;
    }
    else {
        return value;
    }
}
var FastVector = /** @class */ (function () {
    function FastVector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    FastVector.lerp = function (a, b, t) {
        t = clamp01(t);
        return new FastVector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };
    FastVector.distance = function (a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    };
    FastVector.add = function (a, b) {
        return new FastVector(a.x + b.x, a.y + b.y);
    };
    FastVector.sub = function (a, b) {
        return new FastVector(a.x - b.x, a.y - b.y);
    };
    FastVector.mul = function (a, b) {
        return new FastVector(a.x * b.x, a.y * b.y);
    };
    FastVector.div = function (a, b) {
        return new FastVector(a.x / b.x, a.y / b.y);
    };
    FastVector.dot = function (a, b) {
        return a.x * b.x + a.y * b.y;
    };
    FastVector.reflect = function (a, b) {
        var factor = -2 * FastVector.dot(b, a);
        return new FastVector(factor * b.x + a.x, factor * b.y + a.y);
    };
    FastVector.equals = function (a, b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        return (dx * dx + dy * dy) < FastVector.epsilon * FastVector.epsilon;
    };
    FastVector.magnitude = function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
    };
    FastVector.normalize = function (a) {
        var magnitude = FastVector.magnitude(a);
        if (magnitude > FastVector.epsilon) {
            return new FastVector(a.x / magnitude, a.y / magnitude);
        }
        else {
            return new FastVector(0, 0);
        }
    };
    FastVector.toObject = function (a) {
        return { x: a.x, y: a.y };
    };
    FastVector.toArray = function (a) {
        return [a.x, a.y];
    };
    FastVector.toString = function (a) {
        return "(" + a.x + ", " + a.y + ")";
    };
    FastVector.epsilon = 0.00001;
    return FastVector;
}());
exports.default = FastVector;
