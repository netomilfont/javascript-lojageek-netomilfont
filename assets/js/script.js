let item = [
    {
    imagem: 'assets/img/actions/animewoman.jpg',
    nome: 'Anime art',
    valor: '10,00',
    categoria: 'actions'
    },
    {
    imagem: 'assets/img/actions/dragonballpersonagem.jpg',
    nome: 'Personagem Dragon Ball',
    valor: '15,00',
    categoria: 'actions'
    },
    {
    imagem: 'assets/img/actions/starwarspersonagem.jpg',
    nome: 'Personagem Star Wars',
    valor: '20,00',
    categoria: 'actions'
    },
    {
    imagem: 'assets/img/painting/clock.jpg',
    nome: 'Relógio',
    valor: '100,00',
    categoria: 'painting'
    },
    {
    imagem: 'assets/img/painting/gamepad.jpg',
    nome: 'Gamepad',
    valor: '90,00',
    categoria: 'painting'
    },
    {
    imagem: 'assets/img/painting/personagem.jpg',
    nome: 'Personagem',
    valor: '50,00',
    categoria: 'painting'
    },
]


function createActionItem(produto){

    let ul =  document.querySelector(".cardsPainting")
    let li = document.createElement("li")
    let div = document.createElement("div")
    let div2 = document.createElement("div")
    let img = document.createElement("img")
    let div3 = document.createElement("div")
    let p = document.createElement("p")
    let p2 = document.createElement("p")

    div.classList.add("productCard")
    div2.classList.add("imgCard")
    img.src = produto.imagem
    img.alt = 'Imagem do produto'
    div3.classList.add("infoProduct")
    p.classList.add("nameItem")
    p2.classList.add("priceItem")

    p.innerText = produto.nome
    p2.innerText = produto.valor

    div2.append(img)
    div3.append(p, p2)
    div.append(div2, div3)
    li.append(div)
    ul.append(li)




}

function createPaintingItem(produto){

    let ul =  document.querySelector(".cardsAction")
    let li = document.createElement("li")
    let div = document.createElement("div")
    let div2 = document.createElement("div")
    let img = document.createElement("img")
    let div3 = document.createElement("div")
    let p = document.createElement("p")
    let p2 = document.createElement("p")

    div.classList.add("productCard")
    div2.classList.add("imgCard")
    img.src = produto.imagem
    img.alt = 'Imagem do produto'
    div3.classList.add("infoProduct")
    p.classList.add("nameItem")
    p2.classList.add("priceItem")

    p.innerText = produto.nome
    p2.innerText = produto.valor

    div2.append(img)
    div3.append(p, p2)
    div.append(div2, div3)
    li.append(div)
    ul.append(li)




}


function produtoRenderizar () {
    
    for(let i = 0; i < item.length; i++) {

        if(item[i].categoria == 'painting') {
            createActionItem(item[i])

        } else {
            createPaintingItem(item[i])
        }

    }
}

produtoRenderizar()