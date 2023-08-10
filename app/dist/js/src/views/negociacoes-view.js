import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
