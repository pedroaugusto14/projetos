
var conteiner= document.getElementById('produtos') 
const produtos = []
let num = 0
let pos = 4
let ind = 0
let prop = -1
const autidores = [
    [
        `<div class="autidor">
            <img src="midia/img/amostra_01.png" alt="cjgvi">
            <div class="copy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="oferta">
                    <div class="preco">
                        <p class="desconto"><sup><del>R$80,00</del></sup></p>
                        <p class="sifrao">R$</p>
                        <p class="istilo_preco_oferta">60,00</p>
                    </div>
                </div>
            </div>
        </div>`
    ],
    [
        `<div class="autidor">
            <img src="midia/img/amostra_01.png" alt="cjgvi">
            <div class="copy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="oferta">
                    <div class="preco">
                        <p class="desconto"><sup><del>R$80,00</del></sup></p>
                        <p class="sifrao">R$</p>
                        <p class="istilo_preco_oferta">60,00</p>
                    </div>
                </div>
            </div>
        </div>`
    ],
    [
        `<div class="autidor">
            <img src="midia/img/amostra_01.png" alt="cjgvi">
            <div class="copy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="oferta">
                    <div class="preco">
                        <p class="desconto"><sup><del>R$80,00</del></sup></p>
                        <p class="sifrao">R$</p>
                        <p class="istilo_preco_oferta">60,00</p>
                    </div>
                </div>
            </div>
        </div>`
    ],
    [
        `<div class="autidor">
            <img src="midia/img/amostra_01.png" alt="cjgvi">
            <div class="copy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <div class="oferta">
                    <div class="preco">
                        <p class="desconto"><sup><del>R$80,00</del></sup></p>
                        <p class="sifrao">R$</p>
                        <p class="istilo_preco_oferta">60,00</p>
                    </div>
                </div>
            </div>
        </div>`
    ]
]

function novo_autidor(nome, preco, desconto, img, link, net) {
    const autidor = {
        nome: nome,
        preco: preco,
        desconto: desconto,
        img: img,
        link: link,
        net: net,
    }

    autidores.push(autidor)
}

function novo_produto (nome , img , quant , preco , link , desc , resumo, vendas){
    const produto = {
        nome: nome ,
        img: img ,
        quant: quant ,
        preco: preco ,
        link: link ,
        desc: desc,
        resumo: resumo ,
        vendas: vendas,
        novidade: 'novidade',
    }

    produtos.push(produto)
}

//criando o produto
function criar_produto(){
    produtos.map((val)=>{
        conteiner.innerHTML+= `

        <div class="vitrine">
            <h2>`+val.nome+`</h2>
            <img src="`+val.img+`" alt="dsgfsg">
            <p class="sifrao">R$</p>
            <p class="istilo_preco">`+val.preco+`</p>
            <p class="botao_compra">ver</p>
            <p class="istilo_resumo"> dbf fabfva ibgias dubgas bgafbg mdf bjhmdfi hgdbdfb dbnjk bnda sfvbgf oyhdsb guj</p>
        </div>

        `;
        num ++
        if (num == pos){
            if (ind <= prop){
                conteiner.innerHTML+= autidores[ind]
                if (pos >= 12){
                    pos = pos*2
                }else{
                    pos = pos*4
                }
                ind ++
            }
        }
    })
}

novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf',6,)
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,2,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,14,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,1,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,0,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,33,)

autidores.map((val) => {
    prop ++
})

criar_produto()
