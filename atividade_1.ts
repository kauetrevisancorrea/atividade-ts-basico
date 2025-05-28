const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

const verificaParImpar = function (numero: number) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
};

const somatorio = function (numero: number) {
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        total += i;
    }
    return total;
};

const fibonacci = function (numero: number) {
    if (numero < 0) {
        throw new Error("Número deve ser não negativo");
    }
    if (numero === 0) return 0;
    if (numero === 1) return 1;

    let a = 0
    let b = 1
    let c;
    for (let i = 2; i <= numero; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};

class Retangulo {
    constructor(private largura: number, private altura: number) { }

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
};

export {
    nome, idade, altura, estudante,
    verificaParImpar, somatorio, fibonacci, Retangulo
};
