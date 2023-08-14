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
    toString() {
        return JSON.stringify(this._negociacoes, null, 2);
    }
}
//# sourceMappingURL=negociacoes.js.map