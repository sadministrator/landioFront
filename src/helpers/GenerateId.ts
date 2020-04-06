export default class GenerateId {
    static alphabet = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    static generate = (length: number = 8) => {
        let code = '';
        for(let i = 0; i < length; i++) {
            code += GenerateId.alphabet.charAt(Math.floor(Math.random() * GenerateId.alphabet.length));
        }

        return code;
    }
}