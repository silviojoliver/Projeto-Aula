// Caso coloque a chamada dentro do<head> use
//window.onload=function(){... seu código todo aqui....}
console.log("Hello World")
console.log(document.querySelector("h1"))
//document(documento html)
//querySelector (consulta um elemento html)
//querySelector ('tag')
//querySelector ('#id')
//innerHTML(html interno)
document.querySelector("h1").innerHTML += " >>" // adiciona ao texto (>>)

//Acesso a um elemento de formulário
console.log(document.forms.formContato)

//atribuido o acesso ao formContato para a variavel formC
var formC = document.forms.formContato

//Evento de clique no botão confirmar
document.querySelector("#btContato").onclick = function () {
    //alert('ok')
    if (formC.nomeContato.value == "") {
        alert("Preencha o nome! ")
    } else if (formC.emailContato.value == "") {
        alert("Preencha o e-mail! ")
    } else if (formC.comentario.value == "") {
        alert("Preencha o comentário! ")
    } else {
        formC.submit()
    }


    //     alert(formC.nomeContato.value)
    //     alert(formC.emailContato.value)
    //     alert(formC.comentario.value)
}