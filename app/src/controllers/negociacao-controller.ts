import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView", true);
    private _mensagemView: MensagemView = new MensagemView("#mensagemView");
    
    constructor() {
        this._inputData = document.querySelector("#data") as HTMLInputElement;
        this._inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this._inputValor = document.querySelector("#valor") as HTMLInputElement;
        this._negociacoesView.update(this._negociacoes);
    }

    public adicionar(): void {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.isDiaUtil(negociacao.Data)) {
            this._mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return ;
        }
        this._negociacoes.adcionarNegociacao(negociacao);
        this.limparFormulario();
        this.atualizarView();
    }

    private isDiaUtil(data: Date): boolean {
        return data.getDay() > 0 && data.getDay() < 6
    }
        
    private limparFormulario(): void {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
        
    private atualizarView(): void {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }
}