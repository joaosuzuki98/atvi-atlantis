import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco
let telefone1 = new Telefone()
telefone1.ddd = '01'
telefone1.numero = '1234-5678'
let telefone2 = new Telefone()
telefone2.ddd = '02'
telefone2.numero = '0000-1111'
cliente.telefones = [telefone1, telefone2]

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.telefones = [
  telefone1.clonar() as Telefone,
  telefone2.clonar() as Telefone
]
dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log(cliente);
console.log(dependente);
