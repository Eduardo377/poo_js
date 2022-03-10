
let minhaConta = new Conta("Professor Isidro","123.456.789-00",1001,2,1000);
let outraConta = new Conta("Jose de Anchieta","987.654.321-00",1003,4,5000);

// funcoes lá dos botoes
function depositarNaConta(){
    let valor = document.getElementById("txtValor").value;
    outraConta.depositar(valor);
    exibirInfoNaPagina();

}

function sacarDaConta(){
    let valor = document.getElementById("txtValor").value;
    if (outraConta.sacar(valor) == 0){
        alert("Saque efetuado com sucesso!!");
    }
    else{
        alert("ERRO: Saldo Insuficiente!");
    }
    exibirInfoNaPagina();
}

function exibirInfoNaPagina(){
    document.getElementById("info").innerHTML = outraConta.exibirInfo();
    //console.log(minhaConta.exibirInfo());
}