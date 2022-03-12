class ContaEspecial extends Conta{
    #limite = 0;

    constructor(nome, cpf, num, dv, saldo, limite){
        super(nome, cpf, num, dv, saldo);
        this.#limite = limite;
    }

    exibirInfo(){
        return "ContaEspecial: "+this.getNumeroConta()+"/"+this.getDV()+ 
               " Tit:"+this.getNomeTitular()+" ("+this.getCpf()+") R$ "+this.consultarSaldo()+
               " Limite: R$  "+this.#limite;
    }

    sacar(valor){
        console.log("sacar do conta especial")
        let tmp = this.consultarSaldo();
        if (this.consultarSaldo() + this.#limite >= valor){
            this.atualizarSaldo(this.consultarSaldo() - valor);
            return 0;
        }
        return -1;
    }
}