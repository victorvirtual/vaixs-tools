export function IsNullOrEmpty(str: string): boolean {
    return str == null || str.trim().length === 0;
}

export function Sumar( a:number, b:number) {
    return a+b;
}
export function Redondear( value:number, precision:number):number {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
