export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        if (escapar) {
            this.escapar = escapar;
        }
        const htmlElement = document.querySelector(seletor);
        if (!htmlElement) {
            throw new Error("Seletor não existe no DOM");
        }
        this.elemento = htmlElement as HTMLElement;
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            const regex = /<script>[/s/S]*?<\/script>/;
            template = template.replace(regex, "");
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}