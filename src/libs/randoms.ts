/**
 *  Generate ramdoms
 */

import {Size, Position} from "./geo";

export const positionInclusive = (size: Size): Position => ({
    x: Math.random() * size.width,
    y: Math.random() * size.height
});

export const positionNonInclusive = (size: Size): Position => {
    const xRules = Math.round(Math.random()) === 1;
    return {
        x: xRules ? Math.random() * size.width : (
            Math.round(Math.random()) === 1 ? 0 : size.width
        ),
        y: xRules ? (
            Math.round(Math.random()) === 1 ? 0 : size.height
        ) : Math.random() * size.height
    }
}

export const angleDeg = (): number => Math.random() * 360;

export const between = (range: {min: number, max: number}): number => Math.random() * (range.max - range.min) + range.min;

