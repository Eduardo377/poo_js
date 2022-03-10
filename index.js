// toda variável que eu criar do tipo "Carro" automaticamente vem com esta estrutura
class Carro{
    // atributos / propriedades
    #marca = "";
    #modelo = "";
    #ano = 0;
    #preco = 0;

    constructor(marca, modelo, ano, preco){
        this.marca  = marca;
        this.modelo = modelo;
        this.ano    = ano;
        this.preco  = preco;
    }


    alterarMarca(novaMarca){
        this.marca = novaMarca;
    }
    alterarModelo(novoModelo){
        this.modelo = novoModelo;
    }
    alterarAno(novoAno){
        if (novoAno < 1990 || novoAno > 2022){
            console.log("Erro!");
        }
        else{
            this.ano = novoAno;
        }
    }
    alterarPreco(novoPreco){
        this.preco = novoPreco;
    }
    exibirAnuncio(){
        console.log("UaiBiMotors do Isidro");
        console.log("Tomóvi:"+this.marca+" - "+ this.modelo);
        console.log("Ano: "+this.ano + " - R$ "+this.preco);
    }
}

let c1 = new Carro("Xevrole","Corça",1995,5530);
let c2 = new Carro("Porxe","Kayeni",2021,1650000);

// vou preencher os dados do carro c1

c1.exibirAnuncio();
c2.exibirAnuncio();