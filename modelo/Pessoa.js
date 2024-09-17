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
}