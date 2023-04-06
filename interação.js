
function login(){
    var email = document.getElementById('emai')
    var senha = document.getElementById('senhas')
    var res = document.getElementById('res')
    if (email.value == '' || senha.value == ''){
    window.alert('O usuario não digitou o email ou senha')
    } else if (email.value == 'ianthefleck@gmail.com' && senha.value == '12345'){
        res.innerHTML = 'Login feito com sucesso!'
        res.style.color = 'green'
        location.href = 'home.html'
    } else{
        res.innerHTML = 'login invalido'
        res.style.color = 'red'
    }
}