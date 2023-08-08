import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }

    adicionar(): void {
        const negociacao = this.criarNegociacao();
        this.limparFormulario();
    }
    
    private criarNegociacao(): Negociacao {
        const exp = /-/g;
        return new Negociacao(
            new Date(this._inputData.value.replace(exp, ",")), 
            Number.parseInt(this._inputQuantidade.value),
            Number.parseFloat(this._inputValor.value) 
        );
    }

    limparFormulario(): void {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
}