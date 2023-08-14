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

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
        const exp = /-/g;
        return new Negociacao(
            new Date(data.replace(exp, ",")), 
            Number.parseInt(quantidade),
            Number.parseFloat(valor) 
        );
    }

    public toString(): string {
        return `Data: ${this.Data},\nQuantidade: ${this.Quantidade},\nValor: ${this.Valor}`;
    }

    public Equals(obj: any): boolean {
        const outraNegociacao = obj as Negociacao;

        if (!outraNegociacao)
        {
            return false;
        }
        return (outraNegociacao.Data.getDate() === this.Data.getDate()
            && outraNegociacao.Data.getMonth() === this.Data.getMonth()
            && outraNegociacao.Data.getFullYear() === this.Data.getFullYear()
            && outraNegociacao.Quantidade === this.Quantidade
            && outraNegociacao.Valor === this.Valor);
    }

}