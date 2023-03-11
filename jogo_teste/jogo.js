const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d')

const isprit_1 = new Image()
isprit_1.src = 'jogo_teste/sprites.png'

const isprit_2 = new Image()
isprit_2.src = 'jogo_teste/sprites_passaro.png'

function cria_personagem (num) {
    const menino = {
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
        esquerda: false, 
        direita: false,
        cima: false,
        baxo: false,
    }

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
    }
}
