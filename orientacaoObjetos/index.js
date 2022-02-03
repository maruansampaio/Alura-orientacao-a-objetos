import { Client } from './Client.js';
import { ContaCorrente } from './ContaCorrente.js';

const client1 = new Client('Maruan', 11122233309);
const client2 = new Client('Alice', 88822233309);

const conta1 = new ContaCorrente(client1, 1001)
const conta2 = new ContaCorrente(client2, 1002);


conta1.depositar(500);
const valorSacado = conta1.sacar(50);
console.log("valor: ",valorSacado);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(conta1);
console.log(conta2);

console.log(ContaCorrente.numeroDeContas);
 
// console.log(client1);
// console.log(client2);