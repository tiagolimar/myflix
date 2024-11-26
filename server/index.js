import express from 'express';
// import cors from 'cors';

const app = express();
const PORT = 3000;

// app.use(cors({origin:process.env.URL}));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(request,response)=>{
    response.send({message:'Servidor funcionando'})
})

app.post('/api/login',(request,response)=>{
    const {usuario,senha} = request.body;

    if(usuario === process.env.USER && senha === process.env.SENHA){
        response.send({message:'Usuário logado com sucesso',token:'tokiendementira'})
    }
    else{
        response.status(401).send({message:'Usuário ou senha incorretos',token:''})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
})