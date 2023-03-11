const sprites = new Image()
sprites.src = './sprites.png'

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d')

function cria_jogador(sx,sy,largura,altura,x,y,altura2,largura2,){
    const jogador = {
        sx: sx,
        sy: sy,
        largura: largura,
        altura: altura,
        x: x,
        y: y,
        altura2: altura2,
        largura2: largura2,
        pulo: -3.5,
        gravidade: 0.5,
        velocidade: 0,
        esquerda0: false, 
        direita0: false,
        cima: false,
        baxo: false,

        desenho_ativo(e){
            if(e == 'normal'){
                contexto.drawImage(
                    sprites,
                    jogador.sx , jogador.sy,
                    jogador.largura,jogador.altura,
                    jogador.x,jogador.y,
                    jogador.largura2,jogador.altura2,
                );
            }

            if(e == 'morrendo'){
                contexto.fillStyle = "#AD3005"
                contexto.fillRect(jogador.x,jogador.y,jogador.largura2,jogador.altura2)
            }
                
            if(e == 'morto'){
                contexto.fillStyle = "#000000"
                contexto.fillRect(jogador.x,jogador.y,jogador.largura2,jogador.altura2)
                setTimeout((cria_morte()) , 5000)
                jogador.esquerda0 = false
                jogador.direita0 = false
                jogador.cima = false
                jogador.baxo = false
            }
        },

        esquerda(){
            //console.log('seta para a esquerda')
            if (jogador.x >= 10){
                jogador.x -= 1
            }
        },

        direita(){
            if (jogador.x < 460){
                //console.log('seta para a direita')
                jogador.x += 1
            }
        },

        pula(){
            if(jogador.y > 120){
                jogador.velocidade += jogador.pulo
                jogador.y += jogador.velocidade
            }
        },

        tem_chao(){
            // var chao1 = chao.x + chao.largura - 5
            // var chao2 = ponte.x + ponte.largura - 5
            // if (jogador.x > chao1){
            //     return false
            // }else{
            //     return true
            //  }
            // jogador.x
             return true
        },

        taNoChao(){
            if(jogador.tem_chao){
                if(jogador.y < (chao.y - chao.altura)){
                    //console.log('esta no chao')
                    return true
                }else {
                    return false
                }
            }
        },

        atualiza() {
            const pes = jogador.y + jogador.altura2
            if(jogador.tem_chao()){
                if (pes < 240 - 2 ){
                    jogador.velocidade += jogador.gravidade
                    jogador.y += jogador.velocidade
                }else{
                    jogador.velocidade = 0
                }
            }else{
                jogador.velocidade += jogador.gravidade
                jogador.y += jogador.velocidade
            }
            
            if(jogador.esquerda0 == true){
                jogador.esquerda()
            }

            if(jogador.direita0 == true){
                jogador.direita()
            }

            if(jogador.cima == true){
                jogador.pula()
            }

            if(vida <= 0){
                estado = 'morto'
            }
        },

    }
    return jogador
}

function cria_fogo(x){
    const fogo = {
        sx: 0,
        sy: 27,
        largura: 80,
        altura: 127,
        x: x,
        y: 145,
        restaurarx: x,
        dano: 0,
        desenha() {
            contexto.drawImage(
                sprites,
                fogo.sx , fogo.sy,
                fogo.largura,fogo.altura,
                fogo.x,fogo.y,
                fogo.largura,fogo.altura,
            )
        },

        entrou_dentro() {
            var frente_jogador = jogador.x + jogador.largura2
            var pes_jogador = jogador.y + jogador.altura
            if(estado != 'morto'){
                if(frente_jogador > fogo.x && pes_jogador > fogo.y ){
                    if(jogador.x > fogo.x + fogo.largura || frente_jogador < fogo.x + 5 || jogador.x == fogo.x || frente_jogador < fogo.x || jogador.y < fogo.y){
                        estado = 'normal'
                        fogo.dano = 0
                        //console.log('vc esta vivo !!!')
                    }else{
                        estado = 'morrendo'
                        fogo.dano += 1
                        if (fogo.dano == 15){
                            vida -= 1
                            fogo.dano = 0
                        }
                        //console.log('vc morreu !!!')
                    }
                }
            }
        },

        restaurar(){
            fogo.x = fogo.restaurarx
        },
    }
    return fogo
} 

function cria_cacador(x,limite){
    const cacador = {
        sx: 252,
        sy: 367,
        altura: 188,
        largura: 80,
        altura2: 82,
        largura2: 45,
        x: x,
        y: 178,
        dano: 0,
        restaurax: x,
        limite_1: x,
        limite_2: limite,
        direcao: 0,
        direita: false,
        esquerda: false,
        desenha(){
            contexto.drawImage(
                sprites,
                cacador.sx,cacador.sy,
                cacador.largura,cacador.altura,
                cacador.x,cacador.y,
                cacador.largura2,cacador.altura2,
            )
        },

        entrou_dentro() {
            var frente_jogador = jogador.x + jogador.largura2
            var pes_jogador = jogador.y + jogador.altura
            if(estado != 'morto'){
                if(frente_jogador > cacador.x && pes_jogador > cacador.y ){
                    if(jogador.x > cacador.x + cacador.largura2 || frente_jogador < cacador.x + 5 || jogador.x == cacador.x || frente_jogador < cacador.x || jogador.y < cacador.y){
                        estado = 'normal'
                        cacador.dano = 0
                        //console.log('vc esta vivo !!!')
                    }else{
                        estado = 'morrendo'
                        cacador.dano += 1
                        if (cacador.dano == 15){
                            console.log('oi')
                            vida -= 1
                            cacador.dano = 0
                        }
                        //console.log('vc morreu !!!')
                    }
                }
            }
        },

        andar(){
            if(cacador.direcao == 0){
                cacador.x += 1
                if(cacador.x + cacador.largura2 == cacador.limite_2){
                    cacador.direcao = 1
                }
            }if(cacador.direcao == 1){
                cacador.x -= 1
                if(cacador.x + cacador.largura2 == cacador.limite_1){
                    cacador.direcao = 0
                }
            }if(cacador.x + cacador.largura2 > cacador.limite_2){
                cacador.direcao = 1
            }if(cacador.x + cacador.largura2 < cacador.limite_1){
                cacador.direcao = 0
            }
        },
    }
    return cacador
}

function cria_chao(x,largura2){
    const chao = {
        sx: 360,
        sy: 156,
        largura: 300,
        largura2: largura2, 
        altura: 70,
        x: x,
        y: 240,
        restaurarx: x,
        frente: x + largura2,
        desenha() {
            contexto.drawImage(
                sprites,
                chao.sx , chao.sy,
                chao.largura,chao.altura,
                chao.x,chao.y,
                chao.largura2,chao.altura,
            );
        },
        restaurar(){
            chao.x = chao.restaurarx
        },
    }
    return chao
}

function cria_rio(x,largura2){
    const rio = {
        sx: 348,
        sy: 228,
        largura: 350,
        largura2: largura2, 
        altura: 50,
        x: x,
        y: 270,
        restaurarx: x,
        desenha() {
            contexto.drawImage(
                sprites,
                rio.sx , rio.sy,
                rio.largura,rio.altura,
                rio.x,rio.y,
                rio.largura2,rio.altura,
            );
        },
        restaurar(){
            rio.x = rio.restaurarx
        },
    }
    return rio
}

function cria_ponte(x,largura2){
    const ponte = {
        sx: 357,
        sy: 81,
        largura: 280,
        largura2: largura2, 
        altura: 50,
        x: x,
        y: 210,
        restaurarx: x,
        desenha() {
            contexto.drawImage(
                sprites,
                ponte.sx , ponte.sy,
                ponte.largura,ponte.altura,
                ponte.x,ponte.y,
                ponte.largura2,ponte.altura,
            );
        },
        restaurar(){
            ponte.x = ponte.restaurarx
        },
    }
    return ponte
}

function cria_fundo(){
    const fundo = {
        desenha(){
            contexto.fillStyle = '#55c1ff';
            contexto.fillRect(0,0, canvas.width,  canvas.height)
        }
    }
    return fundo
}

function cria_vida(){
    function desenha(){
        let x = 5
        for( let n = 0 ; n < vida ; n++){
            contexto.fillStyle = "#E31456"
            contexto.fillRect(x,5,20,20)
            x += 25
        }
    }
    desenha()
}

function cria_morte(){
    function desenha(){
        contexto.fillStyle = '#C9C9AF';
        contexto.fillRect(50,50, canvas.width -100,  canvas.height -100)

        contexto.fillStyle = '#237D62';
        contexto.fillRect(80,180, canvas.width -160,  canvas.height -250)

        contexto.font = '40px Silkscreen'
        contexto.textAlign = 'right'
        contexto.fillStyle = 'orange'
        contexto.fillText('reviver' , 360 , 220)

        morte = true
        fase.esquerda0 = false
        fase.direita0 = false
    }

    function reviver(){
        if(morte == true){
            fase.restaurar()
            vida = 2
            estado = 'normal'
            jogador.x = 10
            jogador.y = 10
        }
        morte = false
    }
    addEventListener('click' , reviver)
    desenha()
}

function cria_semente(x,y){
    const semente = {
        y: y,
        x: x,
        pegou: false,
        desenha(){
            if(semente.pegou == false){
                contexto.fillStyle = "#1F8C1B"
                contexto.fillRect(semente.x,semente.y,20,20) 
            }
        },

        me_pegou(){
            if(jogador.x + jogador.largura2 == semente.x){
                semente.pegou = true
                sementes ++
            }
        },
    }
    return semente
}

function cria_niveis() {
    const nivel_1 = {
        esquerda0: false,
        direita0: false,
        chao_1: cria_chao(0 , 110),
        chao_2: cria_chao(400,999999999),
        rio_1: cria_rio(90,350),
        ponte_1: cria_ponte(80,340),
        fogo_1: cria_fogo(500),
        fogo_2: cria_fogo(800),
        cacador_1: cria_cacador(300 , 400),
        semente_1: cria_semente(200,220),
        desenha(){
            nivel_1.cacador_1.desenha()
            nivel_1.rio_1.desenha()
            nivel_1.ponte_1.desenha()
            nivel_1.fogo_1.desenha()
            nivel_1.fogo_2.desenha()
            nivel_1.chao_1.desenha()
            nivel_1.chao_2.desenha()
            nivel_1.semente_1.desenha()
        },

        atualiza(){
            /*if(jogador.x + jogador.largura2 == 400){
                nivel_1.chao_1.x -= 400
                nivel_1.chao_2.x -= 400
                nivel_1.rio_1.x -= 400
                nivel_1.ponte_1.x -= 400
                nivel_1.fogo_1.x -= 400
                nivel_1.fogo_2.x -= 400
                nivel_1.cacador_1.limite_2 -= 400
                nivel_1.cacador_1.limite_1 -= 400
                nivel_1.cacador_1.x -= 1 
            }*/

            if (nivel_1.esquerda0  == true){
                nivel_1.esquerda()
            }if (nivel_1.direita0 == true){
                nivel_1.direita()
            }

            console.log(nivel_1.semente_1.pegou)
            nivel_1.semente_1.me_pegou()
            nivel_1.cacador_1.entrou_dentro()
            nivel_1.cacador_1.andar()
            nivel_1.fogo_1.entrou_dentro()
            nivel_1.fogo_2.entrou_dentro()
        },

        esquerda(){
            if(nivel_1.chao_1.x <= -1 ){
                nivel_1.chao_1.x += 2
                nivel_1.chao_2.x += 2
                nivel_1.rio_1.x += 2
                nivel_1.ponte_1.x += 2
                nivel_1.fogo_1.x += 2
                nivel_1.fogo_2.x += 2
                nivel_1.cacador_1.limite_2 += 2
                nivel_1.cacador_1.limite_1 += 2
                nivel_1.cacador_1.x += 1 
                nivel_1.semente_1.x += 2
            }
        },

        direita(){
            if(nivel_1.chao_1.frente < 460){
                nivel_1.chao_1.x -= 2
                nivel_1.chao_2.x -= 2
                nivel_1.rio_1.x -= 2
                nivel_1.ponte_1.x -= 2
                nivel_1.fogo_1.x -= 2
                nivel_1.fogo_2.x -= 2
                nivel_1.cacador_1.limite_2 -= 2
                nivel_1.cacador_1.limite_1 -= 2
                nivel_1.cacador_1.x -= 1 
                nivel_1.cacador_1.x -= 1 
                nivel_1.semente_1.x -= 2
            }
        },

        restaurar(){
            nivel_1.rio_1.x = nivel_1.rio_1.restaurarx
            nivel_1.ponte_1.x = nivel_1.ponte_1.restaurarx
            nivel_1.fogo_1.x = nivel_1.fogo_1.restaurarx
            nivel_1.fogo_2.x = nivel_1.fogo_2.restaurarx
            nivel_1.chao_1.x = nivel_1.chao_1.restaurarx
            nivel_1.chao_2.x = nivel_1.chao_2.restaurarx
        },
    }

    const nivel_2 = {

    }

    switch (nivel_atual) {
        case 1:
            return nivel_1
            break
        case 2:
            return nivel_2
            break
    }
    
}

function teclado_1(e) {
    switch (e.keyCode) {
        case 37:
            jogador.esquerda0 = true
            fase.esquerda0 = true
            break
        case 38:
            jogador.cima = true
            break
        case 39:
            jogador.direita0 = true
            fase.direita0 = true
            break
        case 65:
            if (cacador.me_pegou()){
                console.log('fui abracado virei do bem!')
            }
    }
    
}

function teclado_2(){
    switch(event.keyCode){
        case 37:
            jogador.esquerda0 = false
            fase.esquerda0 = false
            break
        case 38:
            jogador.cima = false
            break
        case 39:
            jogador.direita0 = false
            fase.direita0 = false
            break
        case 65:
            
    }
}

let nivel_atual = 1
let fase = cria_niveis()
let sementes = 0
let estado = 'normal'
let vida = 1
let morte = false
let fundo = cria_fundo()

const personagem = {sx: 156,sy: 0,largura: 90,altura: 135,x: 10,y: 10,altura2: 62,largura2: 45,}

let jogador = cria_jogador(personagem.sx,personagem.sy,personagem.largura,personagem.altura,personagem.x,personagem.y,personagem.altura2,personagem.largura2,) 

document.addEventListener('keydown' , teclado_1)
document.addEventListener('keyup' , teclado_2)

function loop(){
    contexto.clearRect(0,0,500,300)
    fundo.desenha()

    jogador.desenho_ativo(estado)
    jogador.atualiza()
    cria_vida()

    fase.desenha()
    fase.atualiza()
    
    requestAnimationFrame(loop)
}
loop()
