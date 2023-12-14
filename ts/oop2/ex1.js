class Imovel {
    Endereco;
    Cep;
    Area_em_metros;
    #Qtd_banheiros;
    Qtd_quartos;
    valor;
    Qtd_pessoas_moram;
    constructor(Endereco, Cep, Area_em_metros, Qtd_banheiros, Qtd_quartos, valor, Qtd_pessoas_moram) {
        this.Endereco = Endereco;
        this.Cep = Cep;
        this.Area_em_metros = Area_em_metros;
        this.Qtd_banheiros = Qtd_banheiros;
        this.Qtd_quartos = Qtd_quartos;
        this.valor = valor;
        this.Qtd_pessoas_moram = Qtd_pessoas_moram;
    }

    AdicionarMorador() {
        this.Qtd_pessoas_moram++
    }
    RemoverMorador() {
        this.Qtd_pessoas_moram--
    }
}

class Pessoa {
    nome;
    cpf;
    data_nascimento;
    constructor(nome, cpf, data_nascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }
}

class Casa extends Imovel {
    Com_quintal;
    constructor(Com_quintal, Endereco, Cep, Area_em_metros, Qtd_banheiros, Qtd_quartos, valor, Qtd_pessoas_moram) {
        super()
        this.Endereco = Endereco;
        this.Cep = Cep;
        this.Area_em_metros = Area_em_metros;
        this.Qtd_quartos = Qtd_quartos;
        this.valor = valor;
        this.Qtd_pessoas_moram = Qtd_pessoas_moram;
        this.Com_quintal = Com_quintal;
        this.Qtd_banheiros = Qtd_banheiros;
    }
    setQtd_banheiros(Qtd_banheiros) {
        this.Qtd_banheiros = this.Qtd_banheiros <= 5 ? Qtd_banheiros : `não tem banheiro`;
    }
    calculo() {
        if (this.Com_quintal == true) {
            return this.valor * 0.3
        }
        return this.valor;
    }
}

class Apartamento extends Imovel {
    andar;
    valor_condominio;
    constructor(andar, valor_condominio, Qtd_banheiros, Endereco, Cep, Area_em_metros, Qtd_quartos, valor, Qtd_pessoas_moram) {
        super()
        this.andar = andar;
        this.valor_condominio = valor_condominio;
        this.Endereco = Endereco;
        this.Cep = Cep;
        this.Area_em_metros = Area_em_metros;
        this.Qtd_banheiros = Qtd_banheiros;
        this.Qtd_quartos = Qtd_quartos;
        this.valor = valor;
        this.Qtd_pessoas_moram = Qtd_pessoas_moram;
    }
    setQtd_banheiros(Qtd_banheiros) {
        this.Qtd_banheiros = this.Qtd_banheiros <= 3 ? Qtd_banheiros : `não tem banheiro`;
    }
    calculo() {
        return this.valor_condominio + this.valor;
    }
}

class Kitnet extends Imovel {
    constructor(Qtd_banheiros, Endereco, Cep, Area_em_metros, Qtd_quartos, valor, Qtd_pessoas_moram) {
        super()
        this.Endereco = Endereco;
        this.Cep = Cep;
        this.Area_em_metros = Area_em_metros;
        this.Qtd_quartos = Qtd_quartos;
        this.valor = valor;
        this.Qtd_pessoas_moram = Qtd_pessoas_moram;
        this.Qtd_banheiros = Qtd_banheiros;
    }
    setQtd_banheiros(Qtd_banheiros) {
        this.Qtd_banheiros = this.Qtd_banheiros <= 2 ? Qtd_banheiros : `não tem banheiro`;
    }
    calculo() {
        return this.valor;
    }

}

let p = new Pessoa("joao", "12345678900", "12-03-2002");
console.log(p);

let house = new Casa(true, 3, "rua teste", "071111123", 20.2, 3, 20000, 3);
console.log(house);

house.AdicionarMorador()
house.RemoverMorador();

console.log()
console.log(house.calculo());
console.log()

console.log(house);



let ap = new Apartamento(13, 200, 2, "rua teste2", "32144409", 60, 3, 400, 1);
console.log(ap);

ap.AdicionarMorador()
ap.AdicionarMorador()
ap.RemoverMorador()

console.log()
console.log(ap.calculo())
console.log()
console.log(ap);



let kit = new Kitnet(1, "rua teste dos santos", 65478911, 2, 1, 100, 1);
console.log(kit);

kit.AdicionarMorador()
kit.AdicionarMorador()
kit.RemoverMorador()

console.log()
console.log(kit.calculo())
console.log()
console.log(kit);
