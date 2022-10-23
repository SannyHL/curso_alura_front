export class ContaCorrente{
    agencia;
    static numeroDeConta=0;
    _cliente;
    
    _saldo = 0;

    set cliente(novoCliente){
        // Só vai aceitar se o cliente informado for uma instancia de Cliente, for do tipo Cliente:
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeConta++;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
