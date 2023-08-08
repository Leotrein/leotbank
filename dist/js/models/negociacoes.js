export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adcionarNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    // ReadonlyArray é basicamente igual o Array, mas retorna uma lista somente leitura
    get Negociacoes() {
        return this._negociacoes;
    }
}
