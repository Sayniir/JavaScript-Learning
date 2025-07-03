export const PI = 3.1415926;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getDiameter(radius){
    return 2 * radius;
}