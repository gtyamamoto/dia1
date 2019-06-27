function Pessoa(nome,idade,cpf) {
    this.nome=nome;
    this.idade=idade;
    this.cpf = cpf;
}

function Professor(nome,idade,cpf,materia=null){
    Pessoa.call(this,nome,idade,cpf);
    this.materia = materia;
}
Professor.prototype.ensinar =   function(materia){
    this.materia = materia;
    console.log(`${this.nome} está ensinando ${materia}`)
}
Professor.prototype = new  Pessoa();
Professor.prototype.constructor = Professor;
