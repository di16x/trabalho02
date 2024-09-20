import conectar from "./Conexao.js";
import Pessoa from "../modelo/Pessoa.js";
export default class PessoaDAO {

    constructor(){
        this.init();
    }

    async init (){
        try {
                const conexao = await conectar();
                const sql = `
                CREATE TABLE IF NOT EXISTS pessoa(
                    nome VARCHAR (50) NOT NULL,
                    senha VARCHAR (10) NOT NULL,
                    cpf VARCHAR (14) NOT NULL PRIMARY KEY,
                    email VARCHAR (10) NOT NULL,
                    telefone INT (10) NOT NULL 
                        );
                    `;
        await conexao.execute(sql);
        await global.poolConexoes.releaseConnection(conexao);
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
            await global.poolConexoes.releaseConnection(conexao);
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
                pessoa.telefone,
                pessoa.cpf
            ];
            await conexao.execute(sql,parametros);
            await global.poolConexoes.releaseConnection(conexao);


        }
    }

    async excluir (pessoa){
        if(pessoa instanceof Pessoa){
            const conexao = await conectar();
            const sql = `DELETE FROM pessoa WHERE cpf = ?;`;
            const parametros = [
                pessoa.cpf
            ];
            await conexao.execute(sql, parametros);
            await global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar (termoBusca){
        let sql = "";
        let parametros = [];
        if (termoBusca){
            sql = `SELECT * FROM pessoa WHERE cpf ? order by nome;`;
            parametros.push(termoBusca);
        }
        else { 
            sql = `SELECT * FROM pessoa order by nome;`;
        }
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql,parametros);
        let listaPessoas = [];
        for (const registro of registro){
            const pessoa = new Pessoa(
                registro.nome,
                registro.senha,
                registro.cpf,
                registro.email,
                registro.telefone
            );
            listaPessoas.push(pessoa);
        }
        await global.poolConexoes.releaseConnection(conexao);
        return listaPessoas;

    }

}