/** 
 *  Live cycle handling
 */

export const run = (update: Function, render: Function): void => {
    let animId;
    const loopGPU = (): void => {
        animId = window.requestAnimationFrame(loopGPU);
        render();
    };
    window.requestAnimationFrame(loopGPU);
    setInterval(update, 1000 / 60);
}

