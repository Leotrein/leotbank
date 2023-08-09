import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        if (!this.isDiaUtil(negociacao.Data)) {
            this._mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this._negociacoes.adcionarNegociacao(negociacao);
        this.limparFormulario();
        this.atualizarView();
    }
    isDiaUtil(data) {
        return data.getDay() > 0 && data.getDay() < 6;
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
    atualizarView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }
}
