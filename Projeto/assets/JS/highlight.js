const linguagem = document.querySelector('.personalizacao__linguagens');
const areaCodigo = document.querySelector('.editor-codigo__codigo');
const botao = document.querySelector('.botao-highlight');

function aplicaHighlight() {

    const codigo = areaCodigo.innerText;
    areaCodigo.innerHTML = `<code class="codigo ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaCodigo.querySelector('code'));

}

botao.addEventListener('click', () => {

    aplicaHighlight()

})