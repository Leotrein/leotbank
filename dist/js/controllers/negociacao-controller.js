import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoes = new Negociacoes();
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this._negociacoes.adcionarNegociacao(negociacao);
        this.limparFormulario();
    }
    criarNegociacao() {
        const exp = /-/g;
        return new Negociacao(new Date(this._inputData.value.replace(exp, ",")), Number.parseInt(this._inputQuantidade.value), Number.parseFloat(this._inputValor.value));
    }
    limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
}
