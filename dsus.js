class Desenvolvedor {
    constructor(IDdesenvolvedor, idade, nome, codificacao){
        this.IDdesenvolvedor = IDdesenvolvedor;
        this.idade = idade;
        this.nome = nome;
        this.codificacao = codificacao;
    }
}

class Jogador {
    constructor(nome, IDusuario, genero, idade){
        this.nome = nome;
        this.IDusuario = IDusuario;
        this.genero = genero;
        this.idade = idade;
    }
}

class Missoes {
    constructor(pontuacao, IDmissao, tarefas, descricao){
        this.pontuacao = pontuacao;
        this.IDmissao = IDmissao;
        this.tarefas = tarefas;
        this.descricao = descricao;
    }
}

class Sala {
    constructor(NomeSala, IDsala, pontuacao){
        this.NomeSala = NomeSala;
        this.IDsala = IDsala;
        this.pontuacao = pontuacao;
    }
}

class Impostor {
    constructor(sabotagens, capacidadeMax, pontuacao, IDimpostor){
        this.sabotagens = sabotagens;
        this.capacidadeMax = capacidadeMax;
        this.pontuacao = pontuacao;
        this.IDimpostor = IDimpostor;
    }
}
