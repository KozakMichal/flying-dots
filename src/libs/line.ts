/**
 *  Line rendering
 */

import {Position, getDistance} from "./geo";
import {serializeColorWithTransparency, Color} from "./colors";

export interface Line {
    start: Position;
    end: Position;
    opacity: number;
}

export const render = (
    def: Line, 
    ctx: CanvasRenderingContext2D, 
    color: Color
): void => {
    ctx.beginPath();
    ctx.strokeStyle = serializeColorWithTransparency(Object.assign(color, {a: def.opacity})); 
    ctx.moveTo(def.start.x, def.start.y);
    ctx.lineTo(def.end.x, def.end.y);

    ctx.closePath();
    ctx.stroke();
}

export const getLineByCoords = (coordA: Position, coordB: Position, distance: number): Line => {
    const realDistance = getDistance(coordA, coordB);
    if (realDistance <= distance && realDistance !== 0)
        return {
            start: coordA,
            end: coordB,
            opacity: (1 - ((100 / distance) * realDistance) / 100) / 2
        };
}

