function hideBody() {
    const body = document.querySelector('body');
    body.style.display == 'none'? body.style.display = 'block' : body.style.display = 'none';
}

function verificarLogin(){
    hideBody();

    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/login/verificar',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({token})
    }).then(
        response=>response.json()
    ).then(
        dados=>{
            if (dados.success === false){
                location.href = '/client/page/login';
            }
            hideBody();
        }
    ).catch(
        erro=>{
            console.error(erro);
            location.href = '/client/page/login';
        }
    )
}

verificarLogin();