
var conteiner= document.getElementById('produtos') 
const lista = []

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

    lista.push(produto)
}

//criando o produto
function criar_produto(){
    lista.map((val)=>{
        conteiner.innerHTML+= `
        
        <div class="vitrine">
            <h2>`+val.nome+`</h2>
            <a href="`+val.link+`"><img src="`+val.img+`" alt="dsgfsg"></a>
            <p class="sifrao">R$</p>
            <p class="istilo_preco">`+val.preco+`</p>
            <p class="botao_compra">ver</p>
            <p class="istilo_resumo"> dbf fabfva ibgias dubgas bgafbg mdf bjhmdfi hgdbdfb dbnjk bnda sfvbgf oyhdsb guj</p>
        </div>

        `;
    })
}

novo_produto('pedro' , 'midia/img/carrinho.png' , 0 , 40.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fdvbpdfuvbapduvbgáuvgbafívubafvbgaifsdugaioyf')
novo_produto('zezinho' , 'midia/img/carrinho.png' , 0 , 600.00 , '#' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedrinho' , 'midia/img/carrinho.png' , 0 , 9.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedro' , 'midia/img/carrinho.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' , 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedro' , 'midia/img/carrinho.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('pedro' , 'midia/img/carrinho.png' , 0 , 40.00 , '#', 'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,'fgbvfibvdivfuvfubvgfvbubdebnfubvujiauvadpsdbv' ,)
novo_produto('blusa' , 'midia/img/carrinho.png' , 0 , 45 , '#' , 'dfhgpd fuighaíd uf   dpf fdhbdfahd dfga dfga' , 'difugvba dfhbap pydfbau hsdbpauyh ')
novo_produto("pedra" , "midia/img/carrinho.png" , 0, 30.00, '#', 'dvhpsdiuvgp vue vgervpewc uerfvuew fveg', 'fhweifvgeiv vhyevush ceyhvcewu c cewfvoweycv')


criar_produto()
