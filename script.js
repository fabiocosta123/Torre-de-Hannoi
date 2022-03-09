let torres = [[5, 4, 3, 2, 1], [], []]
let posicoes = ['p1', 'p2','p3','p4','p5','p0',
                't1', 't2', 't3',]
    
let movimentos = []
function renderizar(){
    torres.forEach((torre, torreid) => {
        torre.forEach((disco, posicao) => {
            let d = document.querySelector('.d' + disco) 
            posicoes.forEach(posicao => {
               d.classList.remove(posicao)
            })
            
            
            d.classList.add('t' + (torreid +1))
            d.classList.add('p' + (posicao +1))  
        })

    })
}

function mover(deTorre, paraTorre){
    if(!torres[deTorre].length)return
    let disco =  torres[deTorre].pop()
    if(torres[paraTorre].length){
        if(torres[paraTorre][torres[paraTorre].length -1]<disco){
            return torres[deTorre].push(disco)
       
        }
    }
    let d= document.querySelector('.d' + disco)
    d.classList.add('p0')
    torres[paraTorre].push(disco)
    setTimeout(renderizar, 500)
}

function clickTorre(n){
    if(movimentos.length && movimentos[0].length == 1){
        movimentos[0].push(n)
    } else {
    movimentos.unshift([n])
    }
    console.log(movimentos)
}

setInterval(() => {
    if(movimentos.length && movimentos[movimentos.length -1].length == 2){
        let m = movimentos.pop()
       mover( m[0], m[1])
    }
}, 700)


renderizar()
 