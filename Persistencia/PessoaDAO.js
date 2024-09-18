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

    async gravar (pessoa){
        if (pessoa instanceof Pessoa){
            const conexao = await conectar();
            const sql = `INSERT INTO pessoa (nome,senha,cpf,email,telefone)VALUES (?,?,?,?,?);`;
            const parametros = [
                pessoa.nome,
                pessoa.senha,
                pessoa.cpf,
                pessoa.email,
                pessoa.telefone
            ];
            await conexao.execute(sql,parametros);
            await global.poolConexoes.release(conexao);
        }
    }

    async alterar (pessoa){
        if (pessoa instanceof Pessoa){
            const conexao = await conectar();
            const sql = `UPDATE pessoa SET nome =?,
                        senha = ?
                        email =?
                        telefone =?
                        WHERE cpf = ?;`;
            const parametros = [
                pessoa.nome,
                pessoa.senha,
                pessoa.email,
                pessoa.telefone
                pessoa.cpf
                        ];

    }

    async excluir (pessoa){}

    async consultar (termoBusca){}

}