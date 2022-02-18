function MeuObj() {} 
console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ ===  MeuObj.prototype)

MeuObj.prototype.nome = 'Anonimo'
MeuObj.prototype.falar = function() {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}
obj1.falar()
obj2.nome = 'Leonardo'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObj.prototype
obj3.nome = 'Rafael'
obj3.falar()