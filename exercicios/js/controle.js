console.log("Testando Js")
//Criando uma Arrray
var livros=[
    ["Mick","mick.jpg"],
    ["Quem somo nós","quem-somos-nos.jpg"],
    ["A cura quântica","cura-quantica.jpg"],
    ["O Pequeno Principe","pequeno-principe.jpg"]
]

console.log(livros)

var galeria=document.querySelector("#galeria")

for(var i=0;i<livros.length;i++){
    var img = new Image()
    img.src="imagens/" + livros[i][1]
    img.width=120
    galeria.innerHTML+="<p>" + livros[i][0] + "</p>"
    galeria.appendChild(img)
}
