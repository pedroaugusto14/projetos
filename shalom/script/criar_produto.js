
var conteiner= document.getElementById('produtos') 
const produtos = []

function novo_produto (nome , img , quant , preco , link , desc , resumo){
    const produto = {
        nome: nome ,
        img: img ,
        quant: quant ,
        preco: preco ,
        link: link ,
        desc: desc,
        resumo: resumo ,
    }

    produtos.push(produto)
}

//criando o produto
function criar_produto(){
    produtos.map((val)=>{
        conteiner.innerHTML+= `

        <a href="#">
            <div class="vitrine">
                <h2>`+val.nome+`</h2>
                <img src="`+val.img+`" alt="dsgfsg">
                <p class="sifrao">R$</p>
                <p class="istilo_preco">`+val.preco+`</p>
                <p class="botao_compra">ver</p>
                <p class="istilo_resumo"> dbf fabfva ibgias dubgas bgafbg mdf bjhmdfi hgdbdfb dbnjk bnda sfvbgf oyhdsb guj</p>
            </div>
        </a>

        `;
    })
}

novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf')
novo_produto('zezinho' , 'midia/img/produto_09.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedrinho' , 'midia/img/produto_03.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedro' , 'midia/img/produto_08.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedro' , 'midia/img/produto_09.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedro' , 'midia/img/produto_03.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('blusa' , 'midia/img/produto_10.png' , 0 , 45 , '#' , 'dfhgpd fuighaíd uf   dpf fdhbdfahd dfga dfga' , 'difugvba dfhbap pydfbau hsdbpauyh ')
novo_produto("pedra" , "midia/img/produto_08.png" , 0, 30.00, '#', 'dvhpsdiuvgp vue vgervpewc uerfvuew fveg', 'fhweifvgeiv vhyevush ceyhvcewu c cewfvoweycv')

criar_produto()


const autidores = []

function criar_autidor(nome, preco, desconto, img, link, net) {
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