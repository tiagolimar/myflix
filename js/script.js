
function iterarMatriz2D() {
    let matriz2D = [
        ['l1 c1', 'l1 c2', 'l1 c3'],
        ['l2 c1', 'l2 c2', 'l2 c3'],
        ['l3 c1', 'l3 c2', 'l3 c3']
    ];
    
    for(let i in matriz2D){
        for(let k in matriz2D[i]){
            console.log(`Linha "${Number(i)+1}", Coluna "${Number(k)+1}", Item "${matriz2D[i][k]}"`);
        }
    }
}

function preencherElementos() {
    const template = `
    <li class="flex flex-col flex-1 min-w-[256px] max-w-[30%]">
        <img class="rounded" src="./assets/img.png" alt="" srcset="">
        <h3>Nome do Filme</h3>
        <span class="flex ">
            <p>Progresso: </p>
            <p>0,00%</p>
        </span>
    </li>        
    `

    function preencherEm(id,template) {
        const container = document.querySelector(`#${id} ul`);
        container.innerHTML = '';


        Array.from({length:10,items:0}).forEach((_,id)=>container.innerHTML+=template)
    }

    preencherEm('progresso',template);
    preencherEm('desejos',template);
}

preencherElementos();
