import PessoaDAO from "../Persistencia/PessoaDAO.js";

export default class Pessoa{
    #nome
    #senha
    #cpf
    #email
    #telefone


    constructor(nome,senha,cpf,email,telefone){
        this.#nome = nome;
        this.#senha = senha;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;}


    get nome (){
        return this.#nome;
    }

    set nome (novonome){
       this.#nome = novonome; 
    }

    
    get senha (){
        return this.#senha;
    }

    set senha (novasenha){
       this.#senha = novasenha; 
    }


    
    get cpf (){
        return this.#cpf;
    }

    set cpf (novocpf){
       this.#cpf = novocpf; 
    }

    
    get email (){
        return this.#email;
    }

    set email (novoemail){
       this.#email = novoemail; 
    }

    get telefone (){
        return this.#telefone;
    }

    set telefone (novotelefone){
       this.#telefone = novotelefone; 
    }

    toString(){
        return `Nome: ${this.#nome} 
Senha: ${this.#senha} 
CPF: ${this.#cpf} 
Email: ${this.#email }
Telefone: ${this.#telefone}\n`
    }
    async incluir (){
        const pessDAO = new PessoaDAO();
        await pessDAO.gravar(this);
    }

    async alterar (){
        const pessDAO = new PessoaDAO();
        await pessDAO.alterar(this);
    }
    
    async excluir(){
        const pessDAO = new PessoaDAO();
        await pessDAO.excluir(this);
    }

    async consultar(termoBusca){
        const pessDAO = new PessoaDAO();
        return await pessDAO.consultar(termoBusca);
    }
}