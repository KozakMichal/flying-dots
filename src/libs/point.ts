/**
 *  Point update functions
 */

import * as random from "./randoms";
import {getNewPosition, Position}  from "./geo";
import Particles from "../index";

export default class Point {

    private canvas: HTMLCanvasElement;

    private position: { x: number, y: number};
    private angle: number = random.angleDeg();
    private speed: number;
    private radius: number;

    constructor(
        canvas: HTMLCanvasElement, 
        private container: Particles
    ) {
        this.canvas = canvas;
        this.position = random.positionInclusive({
            width: this.canvas.width, 
            height: this.canvas.height
        });
        this.speed = random.between(container.options.speed);
        this.radius = random.between(container.options.radius); 
    }

    render(ctx: CanvasRenderingContext2D): Point {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    }

    update(): Point {
        this.position = getNewPosition(this.angle, this.speed, this.position);
        const maxLineSize = this.container.options.maxLineSize;
        if (
            this.position.x - maxLineSize - this.radius - 1 > this.canvas.width || 
            this.position.x + maxLineSize + this.radius + 1 < 0 ||
            this.position.y + maxLineSize + this.radius + 1 < 0 ||
            this.position.y - maxLineSize - this.radius - 1 > this.canvas.height
        )
            this.reInitialize();

        return this;
    }

    get coordinates(): Position {
        return this.position;
    }

    private reInitialize() {
        this.angle = random.angleDeg();
        const position = random.positionNonInclusive({
            width: this.canvas.width, 
            height: this.canvas.height
        });
        position.x = position.x === 0 ? -this.container.options.maxLineSize : position.x + this.container.options.maxLineSize;
        position.y = position.y === 0 ? -this.container.options.maxLineSize : position.y + this.container.options.maxLineSize;

        this.position = position;
    }

}

