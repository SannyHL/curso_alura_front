import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Sanny", 656565656);
const contaCorrenteSanny = new ContaCorrente(1002, cliente1);


contaCorrenteSanny.depositar(1000);

const cliente2 = new Cliente("Isac", 66488877544);
const conta2 = new ContaCorrente(1005, cliente2);
let valor = 200;
contaCorrenteSanny.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeConta);