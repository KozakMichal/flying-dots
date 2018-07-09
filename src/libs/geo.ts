/**
 *  Position calculations
 */

export interface Position {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export const getDistance = (coordsA: Position, coordsB: Position): number => Math.sqrt(
    Math.pow((coordsA.x - coordsB.x), 2) + Math.pow((coordsA.y - coordsB.y), 2)
)

export const getNewPosition = (angle: number, speed: number, position: Position): Position => ({
    x: Math.cos(angle * Math.PI / 100) * speed + position.x,
    y: Math.sin(angle * Math.PI / 100) * speed + position.y
})

