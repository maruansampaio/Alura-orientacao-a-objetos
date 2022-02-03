import { Client } from './Client.js'

export class ContaCorrente{
    static numeroDeContas = 0;
    agency; 
    _client;
    // #saldo = 0
    _saldo = 0;


    set client(novoValor) {
        if(novoValor instanceof Client){
            this._client = novoValor;
        }
    }
    get client() {
        return this._client;
    }
    get saldo() {
        return this._saldo;
    }
    
    constructor(client, agency) {
        this.client = client;
        this.agency = agency;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor; 
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}