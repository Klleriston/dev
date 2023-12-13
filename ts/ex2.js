class Funcionario {
    Nome;
    Salario;
    constructor(Nome, Salario) {
        this.Nome = Nome;
        this.Salario = Salario;
    }
}
class Gerente extends Funcionario {
    Departamento;
    constructor(Nome, Salario, Departamento) {
        super(Nome, Salario)
        this.Nome = Nome;
        this.Salario = Salario;
        this.Departamento = Departamento;
    }
    ExibirInformacoes() {
        console.log(`Nome: ${this.Nome}, Salario: ${this.Salario}, Departamento: ${this.Departamento}`)
    }
}
class Vendedor extends Funcionario {
    PercentualComissao;
    constructor(Nome, Salario, PercentualComissao) {
        super(Nome, Salario)
        this.Nome = Nome;
        this.Salario = Salario;
        this.PercentualComissao = PercentualComissao;
    }
    CalcularSalario() {
        return this.Salario + this.PercentualComissao;
        }
    ExibirInformacoes() {
        console.log(`Nome: ${this.Nome}, Salario: ${this.Salario}, Percentual na venda: ${this.PercentualComissao}, Salario Final: ${this.CalcularSalario()}`)

    }
}

let ger1 = new Gerente('pessoa', 4000, 'banheiros');
ger1.ExibirInformacoes()
let ven1 = new Vendedor('andr', 2000, 5);
ven1.CalcularSalario()
ven1.ExibirInformacoes()

class Produto {
    constructor(Nome, Valor) {
        this.Nome = Nome;
        this.Valor = Valor;
    }
}
class Vendas {
    Vendedor;
    ListaDeProdutos = [];
    ValorTotal;
    constructor(Vendedor){
        this.Vendedor = Vendedor;
    }
    AdicionarProduto(nome, valor) {
        let prd = new Produto(nome, valor);
        this.ListaDeProdutos.push(prd);
    }
    CalcularTotal() {
        let soma = 0;
        for (let i=0;i< this.ListaDeProdutos.length;i++){
            soma += this.ListaDeProdutos[i].Valor;
            this.ValorTotal = soma;
        }
    }
    FinalizarVenda() {
        for (let i = 0; i < this.ListaDeProdutos.length; i++) {
            const prd = this.ListaDeProdutos[i];
            console.log(prd.Nome, prd.Valor);
        }
        console.log(`Vendedor: ${this.Vendedor.Nome},Total: ${this.ValorTotal}`);
    }
}

let venda = new Vendas(ven1);
venda.AdicionarProduto('Produto1', 100);
venda.AdicionarProduto('Produto2', 150);
venda.CalcularTotal();
venda.FinalizarVenda();