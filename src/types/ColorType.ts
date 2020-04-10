export default interface ColorType {
    name?: string;
    hex?: string;
    rgb?: rgbType;
    hsl?: hslType;
}

interface rgbType {
    r: number;
    g: number;
    b: number;
    a?: number;
}

interface hslType {
    h: number;
    s: number;
    l: number;
    a?: number;
}