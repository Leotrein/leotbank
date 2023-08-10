import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");

if (!form) {
    throw new Error("Não foi possível iniciar a aplicação, verifique se o form existe.");
}
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adicionar(); 
});