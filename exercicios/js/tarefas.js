console.log("JS tarefas")

let lista ={
    nome:'Lista de Tarefas',
    imprimeTitulo:function(el,titulo){
        el.innerHTML=titulo
    },
    estilolista:function(el,corDarBorda){
        el.style.borderWidth='1px'
        el.style.borderStyle='solid'
        el.style.borderColor=corDarBorda

    },
    gravarLista:function(key,el){
        localStorage.setItem(el,key.innerHTML)
    },
    imprimeLista:function(el,lista){
        el.innerHTML=lista

    }
}
//
if(localStorage.lista_l1){
    lista.imprimeLista(document.querySelector('#tarefas_l1'),localStorage.getItem('lista_l1'))
}

console.log(lista.nome)
//imprime o nome da lista em tela
lista.imprimeTitulo(document.querySelector('#lista1 h2'),"Lista de Compras")
lista.imprimeTitulo(document.querySelector('#lista2 h2'),"Lista de Viagem")
//altera a cor da borda da lista
lista.estilolista(document.querySelector('#tarefas_l1'),'blue')
lista.estilolista(document.querySelector('#tarefas_l2'),'green')
//grava a lista em localStorage
document.querySelector('#bt_l1').onclick=function(){
    lista.gravarLista(document.querySelector('#tarefas_l1'),'lista_l1')
}
