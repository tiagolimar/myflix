import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/',(_,response)=>{
    response.send({message:'Servidor funcionando'})
})

app.post('/api/login',(request,response)=>{
    const {usuario,senha} = request.body;

    if(usuario === process.env.USUARIO && senha === process.env.SENHA){
        response.send({message:'Usuário logado com sucesso',success:true, token:'tokiendementira'})
    }
    else{
        response.status(401).send({message:'Usuário ou senha incorretos',success:false, token:''})
    }
})

app.post('/api/login/verificar',(request,response)=>{
    const {token} = request.body;

    if(token === 'tokiendementira'){
        response.send({message:'Usuário logado com sucesso',success:true})
    }
    else{
        response.status(401).send({message:'Usuário não logado',success:false})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
})