console.log("Testando Js 2")

let inputNumber=document.querySelector("#qtd_telas")
let resultadoTelas=document.querySelector("#resultado_telas")
let btCalcular=document.querySelector("#bt_calcular")

function calcular(){
    let result=(inputNumber.value * 9.9).toFixed(2)
    result = result.replace('.',',') 
    console.log(result)

    resultadoTelas.innerHTML='R$' + result
    //resultadoTelas.innerHTML= ''(inputNumber.value * 9.9).toFixed(2)
}

function calcularPorcentagem(){
    let pct = (inputNumber.value * 9.9 ) * 0.07
    resultadoTelas.innerHTML= 'R$ ' + (inputNumber.value * 9.9 + pct).toFixed(2)
}

inputNumber.addEventListener('change',calcular)
inputNumber.addEventListener('keyup',calcular)
// altera o valor ao clicar na seta (use keyup para quando o usuário digitar)
btCalcular.addEventListener('click',calcularPorcentagem)

//++++++++++++++++++++++++++++++

//Controle Sobre Select ++++++++++++++++++++++++++++++++++++++
//Variáveis categorias=select , resultadoCategorias=paragrafo , boxInfo= div que recebe a imagem
let categorias=document.querySelector("#categorias")
let resultadoCategorias=document.querySelector("#resultado_categorias")
let boxInfo=document.querySelector("#box_info")

//img=elemento imagem
function exibeInfo(foto){
    let img = new Image()
    img.src=foto
    img.width='150'
    //impede que a imagem seja replicada
   boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
    //document.querySelector("#box_info").innerHTML=''
   boxInfo.appendChild(img)
    console.log(boxInfo.firstChild.constructor)
}

//exibirCategoria é tomada de decisão relativa a escolha do select
function exibirCategoria(){
    resultadoCategorias.innerHTML=categorias.value
    switch(categorias.selectedIndex){
        case 1 : exibeInfo('imagens/quem-somos-nos.jpg')
        break
        case 2 : exibeInfo('imagens/mick.jpg')
        break
        case 3 : exibeInfo('imagens/pequeno-principe.jpg')
        break
    }
    //resultadoCategorias.innerHTML=categorias.selectedIndex
}

categorias.addEventListener('change',exibirCategoria)

//OBJETOS JAVASCRIPT (PROPRIEDADADES=variaveis,métodos=funções)

//Exemplo 1
let movel={
    nome:"Sofá",
    lugares:3
}
console.log(movel.nome)//Sofá
console.log(movel.constructor)//Object

//Exemplo 2
function animal (especie,porte,nome){
    return{
        _especie:especie,
        _porte:porte,
        _nome:nome
    }
}

let mike= animal("Yok Shire","Pequeno","Mike")
console.log("Meu pet se chama " + mike._nome)
console.log(mike.constructor)

//Exemplo 3
function Produto(nome,tipo){
    this._nome=nome
    this._tipo=tipo
}
function MaquinaCafe(cor,voltagem){
    this._cor=cor
    this._voltagem=voltagem
}

   //instancia 
let produto_1= new Produto("Geladeira","Eletrodomestico")
let maquinaCafe_1 = new MaquinaCafe("Vermelha","220")
console.log(produto_1 instanceof MaquinaCafe)//false
console.log(produto_1 instanceof Produto)//true
console.log(produto_1._nome)
console.log(produto_1.constructor)


//Classes em Javascript

//Exemplo 1
class Pessoa {
    constructor(nome,idade){
        this._nome = nome
        this._idade = idade
    }
}
let funcionario_1 = new Pessoa ("Paloma",31)
console.log('Sou ' + funcionario_1._nome + ', tenho ' + funcionario_1._idade + ' anos')

/////////////////////////////////////////////
class Carro{
    //executa imediatamente ao utilizar a classe
    constructor(modelo,ano){
        this._modelo=modelo
        this._ano=ano
    }
    //método precisa ser invocado
    acessorios(){
        let bancoDeCouro = true
        return bancoDeCouro
    }
    km(x){
        return x
    }
}

let carro_1=new Carro("BMW",2015)
console.log(carro_1._modelo,carro_1.acessorios())
carro_1.acessorios() ? console.log("Tem banco de couro") : null
let km = carro_1.km(80000)
console.log('Este ' + carro_1._modelo + ', tem ' + km + ' rodados' )

//Exemplo 3 - extends
class Mercadoria{
    constructor(tipo,modelo){
        this._tipo=tipo
        this._modelo=modelo
    }
    info(){
        return 'Eu vendo ' + this._tipo + ', modelo ' + this._modelo
    }
}

class Fabricante extends Mercadoria{
constructor(nome,tipo,modelo,regiao){
    super(tipo,modelo)
    this._nome=nome
    this._regiao=regiao

}
apresentacao(){
    return 'Eu sou a emprea ' + this._nome + ', ' +this.info() + '. Estou na região ' + this._regiao
}
}
let empresa=new Fabricante('Apple','Iphone','Iphone 12 Pro','Vale do Silicio')
console.log(empresa.apresentacao())