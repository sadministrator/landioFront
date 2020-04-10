import ColorType from '../types/ColorType'

export default class RandomColor {
    static colors: ColorType[] = [
        { name: 'black', hex: '#000', rgb: { r: 0, g: 0, b: 0 } },
        { name: 'white', hex: '#fff', rgb: { r: 1, g: 1, b: 1 } },
        { name: 'red', hex: '#f00', rgb: { r: 255, g: 0, b: 0 } },
        { name: 'lime', hex: '#0f0', rgb: { r: 0, g: 255, b: 0 } },
        { name: 'blue', hex: '#00f', rgb: { r: 0, g: 0, b: 255 } },
        { name: 'yellow', hex: '#ff0', rgb: { r: 255, g: 255, b: 0 } },
        { name: 'cyan', hex: '#0ff', rgb: { r: 0, g: 255, b: 255 } },
        { name: 'fuchsia', hex: '#f0f', rgb: { r: 255, g: 0, b: 255 } },
        { name: 'silver', hex: '#c0c0c0', rgb: { r: 192, g: 192, b: 192 } },
        { name: 'gray', hex: '#808080', rgb: { r: 128, g: 128, b: 128 } },
        { name: 'maroon', hex: '#800000', rgb: { r: 128, g: 0, b: 0 } },
        { name: 'olive', hex: '#808000', rgb: { r: 128, g: 128, b: 0 } },
        { name: 'green', hex: '#008000', rgb: { r: 0, g: 128, b: 0 } },
        { name: 'purple', hex: '#800080', rgb: { r: 128, g: 0, b: 128 } },
        { name: 'teal', hex: '#008080', rgb: { r: 0, g: 128, b: 128 } },
        { name: 'navy', hex: '#000080', rgb: { r: 0, g: 0, b: 128 } },
    ];

    static generate() {
        const randomNumber = Math.floor(Math.random() * this.colors.length);

        return this.colors[randomNumber];
    }

    static colorsHex() {
        let colorsHex: string[] = [];

        this.colors.map((color) => {
            if (color.hex)
                return colorsHex.push(color.hex);
        });

        return colorsHex;
    }
}