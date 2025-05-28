
const pessoa = JSON.parse(sessionStorage.pessoa)

let spans = document.querySelectorAll('span')

spans[0].textContent = pessoa.nome
spans[1].textContent = pessoa.email
spans[2].textContent = pessoa.telefone
spans[3].textContent = pessoa.cpf
spans[4].textContent = pessoa.pagamento

const img = document.querySelector('.impressora')

img.addEventListener('click', ()=>{
    img.style.display = 'none'
    window.print()
})