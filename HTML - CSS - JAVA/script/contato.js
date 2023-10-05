const formulario = document.getElementById('meuFormulario')// variavel que nao pode ser alterada

formulario.addEventListener('submit',function (event) {
    event.preventDefault() //DESLIGANDO O EVENTO PADÃO DO FORMULARIO
    
    var nome = document.getElementById('nome').value
    var telefone = document.getElementById('telefone').value
    var email = document.getElementById('email').value
    var mensagem = document.getElementById('mensagem').value
    
    window.location.href = 'obrigado.html' +
    
    '?nome=' + encodeURIComponent(nome) +
    
    '&telefone=' + encodeURIComponent(telefone) +
    
    '&email=' + encodeURIComponent(email) +
    
    'mensagem=' + encodeURIComponent(mensagem) +    
    
    console.log( nome + ' | ' + telefone + ' | ' + email + ' | ' + mensagem)
    alert(nome + ' | ' + telefone + ' | ' + email + ' | ' + mensagem)
})
