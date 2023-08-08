export class Negociacao {

    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get Data(): Date {
        return this._data;
    }

    get Quantidade(): number {
        return this._quantidade;
    }

    get Valor(): number {
        return this._valor;
    }

    get Volume(): number {
        return this._quantidade * this._valor
    }

}