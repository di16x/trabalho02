import conectar from "./Conexao.js";
import Pessoa from "../modelo/Pessoa.js";
export default class PessoaDAO {

    constructor(){
        this.init();
    }

    async init (){
        try {
                const conexao = await conectar();
                const sql = `CREATE TABLE IF NOT EXISTS pessoa
                    nome VARCHAR (50) NOT NULL,
                    senha VARCHAR (10) NOT NULL,
                    cpf VARCHAR (14) NOT NULL PRIMARY KEY,
                    email VARCHAR (10) NOT NULL,
                    telefone INT (10) NOT NULL);`;
        await conexao.execute(sql);
        await global.poolConexoes.release(conexao);
        console.log("Banco de dados iniciado!")
    } catch (erro) {
        console.log("O banco de dados deve mal funcionamento!")
    }
    }

    async gravar (pessoa){}

    async alterar (pessoa){}

    async excluir (pessoa){}

    async consultar (termoBusca){}

}