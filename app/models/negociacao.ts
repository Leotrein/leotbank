export class Negociacao {

    constructor(
        private readonly _data: Date, 
        private readonly _quantidade: number, 
        private readonly _valor: number
    ) {}

    get Data(): Date {
        return new Date(this._data.getTime());
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