export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get Data() {
        return new Date(this._data.getTime());
    }
    get Quantidade() {
        return this._quantidade;
    }
    get Valor() {
        return this._valor;
    }
    get Volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(data, quantidade, valor) {
        const exp = /-/g;
        return new Negociacao(new Date(data.replace(exp, ",")), Number.parseInt(quantidade), Number.parseFloat(valor));
    }
    toString() {
        return `Data: ${this.Data},\nQuantidade: ${this.Quantidade},\nValor: ${this.Valor}`;
    }
    Equals(obj) {
        const outraNegociacao = obj;
        if (!outraNegociacao) {
            return false;
        }
        return (outraNegociacao.Data.getDate() === this.Data.getDate()
            && outraNegociacao.Data.getMonth() === this.Data.getMonth()
            && outraNegociacao.Data.getFullYear() === this.Data.getFullYear()
            && outraNegociacao.Quantidade === this.Quantidade
            && outraNegociacao.Valor === this.Valor);
    }
}
//# sourceMappingURL=negociacao.js.map