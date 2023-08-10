import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>   
            </thead>
            <tbody>
                ${model.Negociacoes.map(n => {
                    return `
                        <tr>
                            <td>${this.formatar(n.Data)}</td>
                            <td>${n.Quantidade}</td>
                            <td>${n.Valor}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }

}
