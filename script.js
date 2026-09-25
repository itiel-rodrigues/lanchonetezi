// ==========================================
// CONFIGURAÇÃO
// ==========================================

// COLOQUE AQUI O WHATSAPP DA LANCHONETE
// Exemplo: 5532999999999

const numeroWhatsApp = "5500000000000";


// ==========================================
// CARRINHO
// ==========================================

let carrinho = [];


// ==========================================
// ADICIONAR PRODUTO
// ==========================================

function adicionarPedido(nome, preco, imagem) {

    const produtoExistente = carrinho.find(
        produto => produto.nome === nome
    );


    if (produtoExistente) {

        produtoExistente.quantidade++;

    } else {

        carrinho.push({

            nome: nome,

            preco: preco,

            imagem: imagem,

            quantidade: 1

        });

    }


    atualizarCarrinho();

    abrirCarrinho();

}


// ==========================================
// AUMENTAR QUANTIDADE
// ==========================================

function aumentarQuantidade(index) {

    carrinho[index].quantidade++;

    atualizarCarrinho();

}


// ==========================================
// DIMINUIR QUANTIDADE
// ==========================================

function diminuirQuantidade(index) {

    carrinho[index].quantidade--;


    if (carrinho[index].quantidade <= 0) {

        carrinho.splice(index, 1);

    }


    atualizarCarrinho();

}


// ==========================================
// REMOVER PRODUTO
// ==========================================

function removerProduto(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();

}


// ==========================================
// CALCULAR TOTAL
// ==========================================

function calcularTotal() {

    let total = 0;


    carrinho.forEach(produto => {

        total +=
            produto.preco *
            produto.quantidade;

    });


    return total;

}


// ==========================================
// ATUALIZAR CARRINHO
// ==========================================

function atualizarCarrinho() {

    const lista =
        document.getElementById(
            "lista-carrinho"
        );


    const totalElemento =
        document.getElementById(
            "total-carrinho"
        );


    const quantidadeElemento =
        document.getElementById(
            "quantidade-carrinho"
        );


    lista.innerHTML = "";


    // CARRINHO VAZIO

    if (carrinho.length === 0) {

        lista.innerHTML = `
            <p class="carrinho-vazio">
                🛒 Seu carrinho está vazio.
            </p>
        `;

    }


    // PRODUTOS

    carrinho.forEach(
        (produto, index) => {


        const item =
            document.createElement("div");


        item.classList.add(
            "item-carrinho"
        );


        const subtotal =
            produto.preco *
            produto.quantidade;


        item.innerHTML = `

            <img
                class="imagem-carrinho"
                src="${produto.imagem}"
                alt="${produto.nome}"
            >


            <div class="item-info">

                <h3>
                    ${produto.nome}
                </h3>


                <p>
                    R$
                    ${produto.preco
                        .toFixed(2)
                        .replace(".", ",")}
                </p>


                <div class="item-controle">

                    <button
                        onclick="diminuirQuantidade(${index})">

                        −

                    </button>


                    <span>
                        ${produto.quantidade}
                    </span>


                    <button
                        onclick="aumentarQuantidade(${index})">

                        +

                    </button>

                </div>

            </div>


            <div>

                <strong class="subtotal">

                    R$
                    ${subtotal
                        .toFixed(2)
                        .replace(".", ",")}

                </strong>


                <button
                    class="remover"
                    onclick="removerProduto(${index})">

                    🗑️

                </button>

            </div>

        `;


        lista.appendChild(item);

    });


    // TOTAL

    const total =
        calcularTotal();


    totalElemento.textContent =
        "R$ " +
        total
            .toFixed(2)
            .replace(".", ",");


    // QUANTIDADE TOTAL

    const quantidadeTotal =
        carrinho.reduce(
            (total, produto) =>
                total + produto.quantidade,
            0
        );


    quantidadeElemento.textContent =
        quantidadeTotal;

}


// ==========================================
// ABRIR CARRINHO
// ==========================================

function abrirCarrinho() {

    const carrinhoElemento =
        document.getElementById(
            "carrinho"
        );


    carrinhoElemento.classList.add(
        "aberto"
    );

}


// ==========================================
// FECHAR CARRINHO
// ==========================================

function fecharCarrinho() {

    const carrinhoElemento =
        document.getElementById(
            "carrinho"
        );


    carrinhoElemento.classList.remove(
        "aberto"
    );

}


// ==========================================
// LIMPAR CARRINHO
// ==========================================

function limparCarrinho() {

    carrinho = [];

    atualizarCarrinho();

}


// ==========================================
// FINALIZAR PEDIDO
// ==========================================

function finalizarPedido() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio!"
        );

        return;

    }


    let mensagem =
        "🍔 *NOVO PEDIDO - POINT DO SABOR*%0A%0A";


    carrinho.forEach(produto => {

        const subtotal =
            produto.preco *
            produto.quantidade;


        mensagem +=
            `🍽️ ${produto.quantidade}x ${produto.nome}` +
            ` - R$ ${subtotal
                .toFixed(2)
                .replace(".", ",")}%0A`;

    });


    const total =
        calcularTotal();


    mensagem +=
        `%0A💰 *TOTAL: R$ ${total
            .toFixed(2)
            .replace(".", ",")}*`;


    mensagem +=
        "%0A%0AOlá! Gostaria de finalizar este pedido.";


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;


    window.open(
        url,
        "_blank"
    );

}


// ==========================================
// TROCAR CATEGORIA
// ==========================================

function mostrarCategoria(
    categoria,
    botao
) {

    const categorias =
        document.querySelectorAll(
            ".products"
        );


    const botoes =
        document.querySelectorAll(
            ".category"
        );


    categorias.forEach(item => {

        item.classList.remove(
            "active-category"
        );

    });


    botoes.forEach(item => {

        item.classList.remove(
            "active"
        );

    });


    const selecionada =
        document.getElementById(
            categoria
        );


    selecionada.classList.add(
        "active-category"
    );


    botao.classList.add(
        "active"
    );

}


// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarCarrinho();

    }
);