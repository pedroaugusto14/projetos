const tela = document.getElementById('tela')
const contexto = tela.getContext('2d')

const cor = '#1ec275'
const tamanho = 3

document.addEventListener('DOMContentLoaded', ()=>{


    const pincel = {
        ativo: false,
        movendo: false,
        pos: {
            x:0,
            y:0
        },
        posAnterior: null
    }

    const desenha_linha = (linha)=> {
        contexto.beginPath()
        contexto.moveTo(linha.posAnterior.x , linha.posAnterior.y)
        contexto.lineTo(linha.pos.x , linha.pos.y)
        contexto.stroke()
    }




    tela.onmousedown = (evento) => {pincel.ativo = true}
    tela.onmouseup = (evento) => {pincel.ativo = false}

    const canvasLeft = tela.getBoundingClientRect().left;
    const offsetX = canvasLeft + window.scrollX;
    const canvasTop = tela.getBoundingClientRect().top;
    const offsetY = canvasTop + window.scrollY;

    tela.onmousemove = (evento) => {
        pincel.pos.x = evento.clientX - offsetX
        pincel.pos.y = evento.clientY - offsetY
        contexto.strokeStyle = cor;
        contexto.lineWidth = tamanho;
        pincel.movendo = true
    }

    const ciclo = ()=> {
        if(pincel.ativo && pincel.movendo && pincel.posAnterior){
            pincel.movendo = false
            desenha_linha({ pos: pincel.pos , posAnterior: pincel.posAnterior })
        }
        pincel.posAnterior = {
            x: pincel.pos.x,
            y: pincel.pos.y
        }

        setTimeout(ciclo, 10)
    }

    ciclo()

})

function limpar_quadro(){
    console.log('chegou ate aqui')
    contexto.clearRect( 0 , 0 , tela.width , tela.heigth)
    console.log('passou')
}
