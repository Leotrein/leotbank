import { Negociacao } from "../../models/negociacao.js";
import { Negociacoes } from "../../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView", true);
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
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
