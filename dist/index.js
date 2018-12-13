"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IsNullOrEmpty(str) {
    return str == null || str.trim().length === 0;
}
exports.IsNullOrEmpty = IsNullOrEmpty;
function Sumar(a, b) {
    return a + b;
}
exports.Sumar = Sumar;
function Redondear(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
exports.Redondear = Redondear;
