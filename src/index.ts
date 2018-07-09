import { run as runLiveCycle } from "./libs/liveCycle";
import Point from "./libs/point";
import { render as renderLine, Line, getLineByCoords } from "./libs/line";
import { serializeColor, Color } from "./libs/colors";

interface ParticlesOptions {
    numberOfElements?: number;
    color?: Color;
    maxLineSize?: number;
    radius?: {min: number, max: number};
    speed?: {min: number, max: number};
}

export default class FlyingDots {

    private ctx: CanvasRenderingContext2D;
    private elements: Point[] = [];
    private lines: Line[] = [];

    constructor(
        private canvas: HTMLCanvasElement,
        public options: ParticlesOptions = {
            numberOfElements: 80,
            color: {r: 255, g: 255, b: 255},
            maxLineSize: 150,
            radius: { min: 2, max: 3 },
            speed: { min: 0.8, max: 2.3 }
        }
    ) {
        this.ctx = canvas.getContext("2d");
        this.setUpCanvas = this.setUpCanvas.bind(this);
        this.setUpCanvas();
        for (let i = 0; i < this.options.numberOfElements; i++)
            this.elements.push(new Point(canvas, this));
    }

    private update(): void {
        this.elements.forEach(point => point.update());
        this.lines = [];
        for (let i = 0; i < this.elements.length; i++)
            for (let ii = 0; ii < this.elements.length; ii++) {
                if (i === ii) break;
                const line = getLineByCoords(
                    this.elements[i].coordinates, 
                    this.elements[ii].coordinates, 
                    this.options.maxLineSize
                );
                if (line) this.lines.push(line);
            }
    }

    private render(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.elements.forEach(point => point.render(this.ctx));
        this.lines.forEach(line => renderLine(line, this.ctx, this.options.color));
    }

    run(): FlyingDots {
        window.addEventListener("resize", this.setUpCanvas);
        runLiveCycle(this.update.bind(this), this.render.bind(this));
        return this;
    }

    private setUpCanvas(): void {
        const parentElement = this.canvas.parentElement;
        this.canvas.width = parentElement.clientWidth;
        this.canvas.height = parentElement.clientHeight;
        this.ctx.fillStyle = serializeColor(this.options.color); 
    }

}

