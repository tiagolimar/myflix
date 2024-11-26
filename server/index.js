import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/',(request,response)=>{
    response.send({message:'Servidor funcionando'})
})

app.post('/api/login',(request,response)=>{
    const {usuario,senha} = request.body;
    console.log(process.env.USUARIO)
    if(usuario === process.env.USUARIO && senha === process.env.SENHA){
        response.send({message:'Usuário logado com sucesso',success:true, token:'tokiendementira'})
    }
    else{
        response.status(401).send({message:'Usuário ou senha incorretos',success:false, token:''})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
})