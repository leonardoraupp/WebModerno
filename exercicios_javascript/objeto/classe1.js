class Lancamento {
    constructor(nome="Genérico", valor=0) {
        this.nome= nome
        this.valor = valor
    }
}
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))

    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado 
    }
    verLancamento(){
        return this.lancamentos
    }
}
 
const salario =  new Lancamento('Salario', 45000)
const contaDeLuz =  new Lancamento('Conta de Luz', -220)
const contas = new CicloFinanceiro(11, 2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
console.log(contas.verLancamento())