function login(event) {
    event.preventDefault();
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    fetch('http://localhost:3000/api/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({usuario, senha})
    }).then(
        response=>response.json()
    ).then(
        dados=>{
            if (dados.success === true){
                localStorage.setItem('token',dados.token)
                location.href = '/';
            }else{
                alert('Senha ou usuário incorreto(s).');
            }
        }
    )
}

localStorage.setItem('token','');
console.log(localStorage.getItem('token'))