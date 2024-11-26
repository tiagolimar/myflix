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
