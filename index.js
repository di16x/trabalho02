import express from "express";
import rotaPessoa from "./Rotas/rotaPessoa.js";

const app = express();
const host = '0.0.0.0';
const porta = 4000;

app.use(express.json());

app.use('/pessoas', rotaPessoa);

app.listen(porta,host, () => {
    console.log(`Servidor iniciado em http://${porta}`);
})