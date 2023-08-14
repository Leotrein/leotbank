export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        if (escapar) {
            this.escapar = escapar;
        }
        const htmlElement = document.querySelector(seletor);
        if (!htmlElement) {
            throw new Error("Seletor não existe no DOM");
        }
        this.elemento = htmlElement;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            const regex = /<script>[/s/S]*?<\/script>/;
            template = template.replace(regex, "");
        }
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map