import Pessoa from "./modelo/Pessoa.js";


const pessoa = new Pessoa ("Fulano", "Admin", "12345-678", "fulano_gmail.com", "(00)0123-4567");

pessoa.incluir().then(() => {
    console.log ("Pessoa resgistrada!")
}).catch((erro) => {
    console.log("Algo não saiu como o previsto!"+ erro);
})  ;