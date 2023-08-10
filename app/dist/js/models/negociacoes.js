export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adcionarNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get Negociacoes() {
        return this._negociacoes;
    }
}
