import Pessoa from "./modelo/Pessoa.js";


const pessoa = new Pessoa ("Guga", "1541", "12345-000", "guga_gmail.com", "(00)0123-4567");

pessoa.incluir().then(() => {
    console.log ("Pessoa resgistrada!")
}).catch((erro) => {
    console.log("Algo não saiu como o previsto!"+ erro);
})  ;