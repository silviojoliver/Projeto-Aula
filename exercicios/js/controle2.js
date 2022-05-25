console.log('Testando1 JS')
//CONTROLE SOBRE INPUT TYPE NUMBER
let inputNumber=document.querySelector("#qtd_telas")// mostra o numero
let resultadoTelas=document.querySelector("#resultado_telas") //imprimi na tela
let btCalcular=document.querySelector("#bt_calcular")// botao do calculo

function calcular(){
    let result= (inputNumber.value * 9.9).toFixed(2)
    result = result.replace('.',',')
    console.log(result)

    resultadoTelas.innerHTML= 'RS ' + result
    //resultadoTelas.innerHTML=(inputNumber.value * 9.9).toFixed(2)
}

function calcularPorcentagem(){
    let pct = (inputNumber.value * 9.9) * 0.07
    resultadoTelas.innerHTML= 'R$ ' + (inputNumber.value * 9.9 + pct).toFixed(2)
}

// (addEventListener)Adicione um evento de clique a um elemento
inputNumber.addEventListener('change',calcular)
inputNumber.addEventListener('keyup',calcular)
//altera q valor ao clicar na seta(use keyup para quando o usuario digitar)
btCalcular.addEventListener('click',calcularPorcentagem)//porcentagem


//++++++++++++++++++++++++++++++++++++

//CONTROLE SOBRE SELECT +++++++++++++++++++++
let categorias=document.querySelector("#categorias")
let resultadoCategorias=document.querySelector("#resultado_categorias")
let boxInfo=document.querySelector("#box_info")

function exibeInfo(){
    let img = new Image()
    img.src='imagens/quem-somos-nos.jpg'
    img.width='150'
    //img.className='w-50'
    boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
    //document.querySelector("#box_info").innerHTML=''
    boxInfo.appendChild(img)
    console.log(boxInfo.firstChild)
}

function exibirCategoria(){
    resultadoCategorias.innerHTML=categorias.value
    switch(categorias.selectedIndex){
        case 1 : exibeInfo()
        break
    }
    //resultadoCategorias.innerHTML=categorias.selectedIndex
}

categorias.addEventListener('change',exibirCategoria)