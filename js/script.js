
let btn = document.querySelector('img')

btn.addEventListener('click', pegarDados)

function pegarDados(){
    let form = document.querySelector('form')

    let pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        CPF: form.CPF.value,
        pagamento: form.pagamento.value
    }
    
    sessionStorage.pessoa = JSON.stringify(pessoa)
    location.href = 'file:///D:/cadastro/confirmarCadastro.html'
}
