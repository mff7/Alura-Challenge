const ul = document.querySelector('.feed__lista')

const criarPost = (corBorda, code, titulo, descricao) => {

    const post = document.createElement('li')
    post.classList.add('lista__items')
    const conteudo =
        `
     <div class="fundo__post">
         <div class="editor-codigo__borda" style="background:${corBorda}" >
             <div class="editor-codigo__cabecalho">
                 <img src="./assets/img/botao-editor-codigo.svg" alt="Ilustração dos botões mac"
                     class="editor-codigo__cabecalho-botoes">
                 <div class="editor-codigo__codigo">
                     <p class="codigo" >${code}</p>
                 </div>
             </div>
         </div>
         <div class="post__informacoes">
             <h2 class="post__titulo">${titulo}</h2>
             <p class="post__descricao">${descricao}</p>
         </div>
         <div class="post__social">
             <div class="post__social-icones">
                 <div class="icones__comentario">
                     <img class="icone__comentario" src="./assets/img/icone-comentario.svg">
                     <p class="icones__texto">9</p>
                 </div>
                 <div class="icones__amei">
                     <img class="icone__coracao" src="./assets/img/icone-coracao.svg">
                     <p class="icones__texto">9</p>
                 </div>
             </div>
             <div class="usuario__foto">
                 <img src="./assets/img/foto.svg" class="usuario__foto">
                 <p class="icones__texto">@harry</p>
             </div>
         </div>
     </div>
    

  `

    post.innerHTML = conteudo

    return post

}

function pegaDados() {

    const dados = JSON.parse(localStorage.getItem('dado')) || []

    dados.forEach(element => {
        ul.appendChild(criarPost(element.corBorda, element.code, element.titulo, element.descricao))

    });

}

pegaDados()