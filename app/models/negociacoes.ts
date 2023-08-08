import { Negociacao } from "./negociacao";

export class Negociacoes {

    private _negociacoes: Array<Negociacao>;

    constructor() {
        this._negociacoes = [];
    }

    adcionarNegociacao(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    // ReadonlyArray é basicamente igual o Array, mas retorna uma lista somente leitura
    get Negociacoes(): ReadonlyArray<Negociacao> {
        return this._negociacoes;
    }
}