var form = document.querySelector(".formulario")
var botaoEnviar = document.querySelector(".botao-enviar")

botaoEnviar.addEventListener("click", (evento) => {

  evento.preventDefault()

  var code = document.querySelector(".editor-codigo__codigo").textContent
  var titulo = document.querySelector(".projeto__nome").value
  var descricao = document.querySelector(".projeto__descricao").value
  var corBorda = document.querySelector(".input-color").value
  var linguagens = document.querySelector(".personalizacao__linguagens").value
  const dado = JSON.parse(localStorage.getItem("dado")) || []

  const dados = {
    code,
    titulo,
    descricao,
    corBorda,
    linguagens

  }

  const dadosAtualizados = [...dado, dados]

  localStorage.setItem('dado', JSON.stringify(dadosAtualizados))

})
