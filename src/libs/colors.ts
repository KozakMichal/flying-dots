export interface Color {
    r: number;
    g: number;
    b: number;
    a?: number;
};

export const serializeColor = (color: Color) => `rgb(${[color.r, color.g, color.b].join(",")})`; 
export const serializeColorWithTransparency = (color: Color) => `rgba(${[color.r, color.g, color.b, color.a].join(",")})`; 
