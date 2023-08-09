import { View } from "./view.js";
export class MensagemView extends View {
    constructor(seletor) {
        super(seletor);
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
