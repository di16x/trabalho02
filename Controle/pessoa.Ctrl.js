import Pessoa from "../modelo/Pessoa";

export default class PessoaCtrl{
    
    gravar (requisicao,resposta){
        if(requisicao.method == "POST" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome = dados.nome;
            const senha = dados.senha;
            const cpf = dados.cpf;
            const email = dados.email;
            const telefone = dados.telefone;

            if (nome && senha && cpf && email && telefone){
                const pessoa = new Pessoa(nome,senha,cpf,email,telefone);
                pessoa.incluir() .then (() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Pessoa Cadastrada com sucesso!"
                    })
                }).catch((erro)=>{
                    resposta.status(500).json({
                        "status":false,
                        "mensagem": "Erro ao incluir a pessoa:" + erro.message
                    })
                });
            }

        }
        else {
            resposta.status(405).json({
                "status":false,
                "mensagem": "Requisição inválida!"
            })
        }
    };

    alterar (requisicao,resposta){
        if((requisicao.method == "PUT" || requisicao.method == "PATCH")
            && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome = dados.nome;
            const senha = dados.senha;
            const cpf = dados.cpf;
            const email = dados.email;
            const telefone = dados.telefone;

            if (nome && senha && cpf && email && telefone){
                const pessoa = new Pessoa(nome,senha,cpf,email,telefone);
            }
            else{
                resposta.status(400).json({
                    "status" : false,
                    "mensagem" : "Requisição mal sucedida!"
                })
            }
        }
            else {
                resposta.status(405).json({
                    "status": false,
                    "mensagem":"Requisição inválida!"
                });
                
            }      
        }

    excluir (requisicao,resposta){};

    consultar (requisicao,resposta){};
}