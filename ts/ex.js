class Livro {
    titulo;
    autor;
    editora;
    ano_publicacao;
    disponibilidade = true;
    constructor(titulo, autor, editora, ano_publicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.ano_publicacao = ano_publicacao;
    }
}

let livro1 = new Livro("One Piece", "Eiichiro Oda", "Jump", 1999);
let livro2 = new Livro("Hunter x Hunter", "Yoshihiro Togashi", "Jump", 1998);
let livro3 = new Livro("Jujutsu Kaisen", "Gege Akutami", "Jump", 2018);
let livro4 = new Livro("Naruto", "Masashi Kishimoto", "Jump", 1999);

let arraylivros = [];
arraylivros.push(livro1);
arraylivros.push(livro2);
arraylivros.push(livro3);
arraylivros.push(livro4);
// console.log(arraylivros);

class Biblioteca extends Livro {
    nome;
    endereco;
    telefone;
    acervo;
    constructor(nome, endereco, telefone, acervo) {
        super()
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.acervo = acervo;
    }
    buscar(nome) {
        for (let i = 0; i < this.acervo.length; i++) {
            if (this.acervo[i].titulo === nome) {
                console.log(this.acervo[i])
            }
        }
    }
    emprestimo(nome) {
        for (let i=0;i<this.acervo.length;i++){
            if (this.acervo[i].titulo === nome && this.acervo[i].disponibilidade === true) {
                console.log(`O livro foi emprestado !`)
                this.acervo.disponibilidade = false;
            }
        }
    }   
    devolucao(nome){
        for (let i=0;i<this.acervo.length;i++){
            if (this.acervo[i].titulo === nome && this.acervo.disponibilidade == false) {
                this.acervo[i].disponibilidade = true;
                console.log('O livro foi devolvido !')
            }
        }
    }
}

let biblioteca = new Biblioteca('bib', 'rua sei la hdashdas', 1199999999, arraylivros);
biblioteca.buscar('Hunter x Hunter');
biblioteca.emprestimo('Hunter x Hunter');
biblioteca.devolucao('Hunter x Hunter');

