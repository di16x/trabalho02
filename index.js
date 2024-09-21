import express from "express";

const app = express();
const host = '0.0.0.0';
const porta = 4000;

app.use(express.json());

app.listen(porta,host, () => {
    console.log(`Servidor iniciado em http://${porta}`);
})