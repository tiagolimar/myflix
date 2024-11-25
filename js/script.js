
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
