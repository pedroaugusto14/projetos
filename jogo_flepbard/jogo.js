console.log ('jogo do fleep bard')
const sprites = new Image();
sprites.src = './sprites_passaro.png';

let fremes = 0

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d')

const som_bate = new Audio();
som_bate.src = './efeitos/efeitos_hit.wav'

const som_caiu = new Audio();
som_caiu.src = './efeitos/efeitos_caiu.wav'

const som_ponto = new Audio();
som_ponto.src = './efeitos/efeitos_ponto.wav'

const som_pulo = new Audio();
som_pulo.src = './efeitos/efeitos_pulo.wav'

function cria_passaros () {
    const passaro = {
        spriteX: 0,
        spritey: 0,
        largura: 33,
        altura: 24,
        x: 10,
        y: 155,
        velocidade:0,
        gravidade:0.25,
        pulo:4.6,
        movimento: [
            {spriteX: 0,spritey: 0,},
            {spriteX: 0,spritey: 26,},
            {spriteX: 0,spritey: 52,},
            {spriteX: 0,spritey: 26,},
        ],
        freme_atual: 0,
        animacao(){
            const intervalo = 10;
            const passou = fremes % intervalo === 0;
            //console.log('passou' , passou)

            if (passou){
                const incremento = 1 + this.freme_atual 
                const base_repeticao = this.movimento.length
                this.freme_atual = incremento % base_repeticao
            }
        },
        pula(){
            passaro.velocidade =- passaro.pulo
        },
        fez_colisao(){
            const posicao = passaro.y + passaro.altura
            if (posicao >= globais.chao.y){
                //console.log('colidiu')
                som_bate.play()
                muda_tela(telas.game_over)
                passaro.y = 150
                passaro.velocidade = 0
            }if (posicao <= 0){
                //console.log('colidiu')
                som_bate.play()
                muda_tela(telas.game_over)
                passaro.y = 150
                passaro.velocidade = 0
            }

        },
        desenha() {
            this.animacao()
            const { spriteX, spritey } = passaro.movimento[passaro.freme_atual];
            contexto.drawImage(
                sprites,
                spriteX , spritey,
                passaro.largura,passaro.altura,
                passaro.x,passaro.y,
                passaro.largura,passaro.altura,
            );
        },
        atualiza () {
            passaro.fez_colisao()
            passaro.velocidade += passaro.gravidade;
            passaro.y += passaro.velocidade;
        },
    };
    return passaro
}

function cria_chao () {
    const chao = {
        spriteX: 0,
        spriteY: 610,
        largura: 224,
        altura: 112,
        x: 0,
        y: canvas.height - 112,
        atualiza (){
            //console.log('chao movendo')
            const movimentoDoChao = 1
            const repete = chao.largura / 2
            const movimento = chao.x - movimentoDoChao
            chao.x = movimento % repete
        },
        desenha () {
            contexto.drawImage(
                sprites,
                chao.spriteX,chao.spriteY,
                chao.largura,chao.altura,
                chao.x,chao.y,
                chao.largura,chao.altura,
            );
            
            contexto.drawImage(
                sprites,
                chao.spriteX,chao.spriteY,
                chao.largura,chao.altura,
                (chao.x + chao.largura),chao.y,
                chao.largura,chao.altura,
            );
        },
    };
    return chao
}

function cria_fundo () {
    const fundo = {
        spriteX:390,
        spriteY:0,
        largura:275,
        altura:204,
        x:0,
        y:canvas.height - 275,
        desenha () {
            contexto.fillStyle = '#55c1ff';
            contexto.fillRect(0,0, canvas.width,  canvas.height)

            contexto.drawImage(
                sprites,
                fundo.spriteX,fundo.spriteY,
                fundo.largura,fundo.altura,
                (fundo.x + fundo.largura),fundo.y,
                fundo.largura,fundo.altura
            );
            
            contexto.drawImage(
                sprites,
                fundo.spriteX,fundo.spriteY,
                fundo.largura,fundo.altura,
                fundo.x,fundo.y,
                fundo.largura,fundo.altura,
            );
        },
    };
    return fundo 
}

function cria_canos () {
    const canos = {
        largura: 52,
        altura: 400,
        ceu :{
            spriteX: 52,
            spritey: 169,
        },
        chao: {
            spriteX: 0,
            spritey: 169,
        },
        espaco: 90,
        pares: [],
        desenha(){
            canos.pares.forEach(function(par){

                const randomy = par.Y
                const canos_chaox = par.x
                const canos_chaoy = canos.altura + canos.espaco + randomy

                contexto.drawImage(
                    sprites,
                    canos.chao.spriteX , canos.chao.spritey,
                    canos.largura,canos.altura,
                    canos_chaox,canos_chaoy,
                    canos.largura,canos.altura,
            )
                //console.log('desenhou',canos_chaoy)
                const canos_ceuy = randomy
                const canos_ceux = par.x 

                contexto.drawImage(
                    sprites,
                    canos.ceu.spriteX , canos.ceu.spritey,
                    canos.largura,canos.altura,
                    canos_ceux,canos_ceuy,
                    canos.largura,canos.altura,
            )

            par.cano_ceu = {
                x:canos_ceux,
                y:canos.altura + -250
            }
            par.cano_chao = {
                x:canos_chaox,
                y:canos_chaoy
            }
        })
            },
            
        tem_colisao(par) {
            const cabeca_passaro = globais.passaro.y
            const pe_passaro = globais.passaro.y + globais.passaro.altura

            if ((globais.passaro.x + globais.passaro.largura) >= par.x){
                //console.log('envadiu o x')
                if (cabeca_passaro <= par.cano_ceu.y) {
                    return true
                }
                if (pe_passaro >= par.cano_chao.y){
                    return true    
                }
            }
        },    

        atualiza (){
            const passou_100 = fremes % 100 == 0
            if (passou_100){
                //console.log('passou 100 fremes')
                canos.pares.push({
                    x: 300,
                    Y: -150 * (Math.random() + 1),
                })
            }
            canos.pares.forEach(function(par){
                par.x -= 2
                if (canos.tem_colisao(par)){
                    //console.log('colidiu')
                    som_bate.play()
                    muda_tela(telas.game_over)
                    canos.pares.shift()
                    globais.passaro.y = 150
                    globais.placar.pontuacao = 0
                }
                if (par.x + canos.largura <= 0){
                    canos.pares.shift();
                    globais.placar.pontuacao += 1
                    som_ponto.play()
                }
            })
        },
    }
    return canos 
}

function cria_mensagem (){
    const mensagem ={
        spriteX:134,
        spriteY:0,
        largura:174,
        altura:152,
        x:(canvas.width / 2) - 174 / 2 ,
        y:50,
        desenha () {
            contexto.drawImage(
                sprites,
                mensagem.spriteX,mensagem.spriteY,
                mensagem.largura,mensagem.altura,
                mensagem.x,mensagem.y,
                mensagem.largura,mensagem.altura,
            );
        },
    };
    return mensagem
}

function cria_placar (){
    const placar = {
        pontuacao: 0,
        desenha(){
            contexto.font = '50px Silkscreen'
            contexto.textAlign = 'right'
            contexto.fillStyle = 'white'
            contexto.fillText(placar.pontuacao , 270 , 45)
        },
        atualiza(){

        },
    }
    return placar
}

let tela_ativa = {};
function muda_tela(novatela)  {
    tela_ativa = novatela;
};

function cria_mensagem_fim (){
    const mensagem_fim = {
        spriteX:134,
        spriteY:153,
        largura:226,
        altura:200,
        x:(canvas.width / 2) - 226 / 2 ,
        y:50,
        desenha () {
            contexto.drawImage(
                sprites,
                mensagem_fim.spriteX,mensagem_fim.spriteY,
                mensagem_fim.largura,mensagem_fim.altura,
                mensagem_fim.x,mensagem_fim.y,
                mensagem_fim.largura,mensagem_fim.altura,
            );
        },
    }
    return mensagem_fim
}

const globais = {
    mensagem_fim : cria_mensagem_fim(),
    placar : cria_placar(),
    mensagem : cria_mensagem(),
    canos : cria_canos(),
    fundo : cria_fundo(),
    chao : cria_chao(),
    passaro : cria_passaros()
}

const telas = {
    inicio : {
        desenha() {
            globais.fundo.desenha()
            globais.chao.atualiza()
            globais.chao.desenha()
            globais.passaro.desenha()
            globais.mensagem.desenha()
        },
        atualiza() {

        },
        click() {
            muda_tela(telas.jogo)
        },
    },
    jogo : {
        desenha(){
            globais.fundo.desenha()
            globais.canos.desenha()
            globais.chao.atualiza()
            globais.chao.desenha()
            globais.passaro.desenha()
            globais.placar.desenha()
        },
        click(){
            globais.passaro.pula()
            som_pulo.play()
        },
        atualiza() {
            globais.passaro.atualiza()
            globais.canos.atualiza()
        },
    },
    game_over : {
        desenha(){
            globais.mensagem_fim.desenha()
        },
        atualiza(){

        },
        click(){
            muda_tela(telas.inicio)
        },
    },
};

function loop() {
    tela_ativa.desenha();
    tela_ativa.atualiza();
    requestAnimationFrame(loop);
    fremes += 1
};

window.addEventListener('click' , function (){
    if (tela_ativa.click){
        tela_ativa.click();
    }
});

muda_tela(telas.inicio) 
loop()
