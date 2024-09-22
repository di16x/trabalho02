import Pessoa from "../modelo/Pessoa.js";

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
                pessoa.alterar().then(()=> {
                    resposta.status(200).json({
                        "status" : true,
                        "mensagem":"Cliente alterado com sucesso!"

                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao alterar a pessoa" + erro.message
                })
            })
        }
            else {
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

    excluir(requisicao,resposta){
    
        if(requisicao.method == "DELETE" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome = dados.nome;
            const senha = dados.senha;
            const cpf = dados.cpf;
            const email = dados.email;
            const telefone = dados.telefone;

            if (cpf){
                const pessoa = new Pessoa(cpf);
                pessoa.excluir().then(()=> {
                    resposta.status(200).json({
                        "status" : true,
                        "mensagem":"Cliente excluido com sucesso!"

                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao alterar a pessoa" + erro.message
                })
            })
        }

            else{
                resposta.status(400).json({
                    "status" : false,
                    "mensagem" : "Requisição mal sucedida!"
                })
            }
        }
            else{
                resposta.status(405).json({
                    "status": false,
                    "mensagem":"Requisição inválida!"
                });
                
            }      
        
            
        }
    

    consultar(requisicao,resposta) { 
        let termoBusca = requisicao.params.termoBusca;
        if(!termoBusca){
            termoBusca ="";

        }
        if(requisicao.method == "GET"){
            const pessoa = new Pessoa();
            pessoa.consultar(termoBusca).then((pessoas) =>{
                return resposta.status(200).json({
                    "status":true,
                    "listaClientes": pessoas
                });
            }).catch((erro) =>{
                return resposta.status(500).json({
                    "status:":false,
                    "mensagem": "Erro ao consultar a lista de pessoas cadastradas " + erro.message
                })
            })
        } else {
                resposta.status(405).json({
                "status":false,
                "mensagem": "Requisição invalida! Consulte a documentação!"
            });
        }
    }
}
    

    
    




