const whatsappNumber = "5532999407668";

const products = [
    // ========== PIZZAS ==========
    {
        id: 1,
        category: "pizzas",
        name: "Al Capone",
        description: "Molho de tomate, mussarela, tomate, manjericão, palmito, frango desfiado, orégano e champignon.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 33.9, M: 40, G: 45.9 }
    },
    {
        id: 2,
        category: "pizzas",
        name: "Alho",
        description: "Molho de tomate, mussarela, orégano e alho.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 33.9, M: 40, G: 43.9 }
    },
    {
        id: 3,
        category: "pizzas",
        name: "Arpoador",
        description: "Molho de tomate, mussarela, alho, provolone, parmesão, salaminho, cebola e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 33.9, M: 40, G: 44.9 }
    },
    {
        id: 4,
        category: "pizzas",
        name: "Arco-Íris",
        description: "Molho de tomate, mussarela, ovo, milho, cebola, pimentão, lombo canadense, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 35.9, M: 42, G: 45.9 }
    },
    {
        id: 5,
        category: "pizzas",
        name: "Atum com Catupiry",
        description: "Molho de tomate, mussarela, atum, orégano e catupiry.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 31.9, M: 41.9, G: 43.9 }
    },
    {
        id: 6,
        category: "pizzas",
        name: "Atum aos Queijos",
        description: "Molho de tomate, mussarela, provolone, parmesão, cheddar, catupiry, orégano e atum.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 37.9, M: 41.9, G: 44.9 }
    },
    {
        id: 7,
        category: "pizzas",
        name: "Atum",
        description: "Molho de tomate, mussarela, cebola, orégano e atum.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 32.9, M: 37, G: 43.9 }
    },
    {
        id: 8,
        category: "pizzas",
        name: "Bacon",
        description: "Molho de tomate, mussarela, cebola, bacon e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 32.9, M: 38, G: 42.9 }
    },
    {
        id: 9,
        category: "pizzas",
        name: "Barra da Tijuca",
        description: "Molho de tomate, mussarela, champignon, palmito, tomate seco e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 38.9, M: 43, G: 46.9 }
    },
    {
        id: 10,
        category: "pizzas",
        name: "Baiana",
        description: "Molho de tomate, mussarela, molho de pimenta, ovo, calabresa, cebola e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 35.9, M: 40, G: 42.9 }
    },
    {
        id: 11,
        category: "pizzas",
        name: "Caipira",
        description: "Molho de tomate, mussarela, frango, milho e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 32.9, M: 39, G: 43.9 }
    },
    {
        id: 12,
        category: "pizzas",
        name: "Calabresa",
        description: "Molho de tomate, mussarela, cebola, calabresa e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 31.9, M: 39.9, G: 42.9 }
    },
    {
        id: 13,
        category: "pizzas",
        name: "Carioca",
        description: "Molho de tomate, mussarela, cheddar, bacon, frango e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 36.9, M: 40, G: 44.9 }
    },
    {
        id: 14,
        category: "pizzas",
        name: "Champignon",
        description: "Molho de tomate, mussarela, champignon e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 38.9, M: 42, G: 44.9 }
    },
    {
        id: 15,
        category: "pizzas",
        name: "Cinco Queijos",
        description: "Molho de tomate, mussarela, provolone, parmesão, cheddar, catupiry e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 32.9, M: 39, G: 43.9 }
    },
    {
        id: 16,
        category: "pizzas",
        name: "Copacabana",
        description: "Molho de tomate, mussarela, milho, palmito, frango desfiado, tomate seco e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 39.9, M: 42, G: 47.9 }
    },
    {
        id: 17,
        category: "pizzas",
        name: "Delícia",
        description: "Molho de tomate, mussarela, provolone, parmesão, ovo, cebola, bacon, lombo, milho e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 31.9, M: 39, G: 45.9 }
    },
    {
        id: 18,
        category: "pizzas",
        name: "Frango com Catupiry",
        description: "Molho de tomate, mussarela, catupiry, frango desfiado e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 32.9, M: 37, G: 43.9 }
    },
    {
        id: 19,
        category: "pizzas",
        name: "Leblon",
        description: "Molho de tomate, mussarela, catupiry, bacon, lombo e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 31.9, M: 38.9, G: 43.9 }
    },
    {
        id: 20,
        category: "pizzas",
        name: "Lombo Canadense",
        description: "Molho de tomate, mussarela, lombo canadense e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 37.9, M: 39.9, G: 46.9 }
    },
    {
        id: 21,
        category: "pizzas",
        name: "Marguerita",
        description: "Molho de tomate, mussarela, tomate, manjericão e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 36.9, M: 39.9, G: 45.9 }
    },
    {
        id: 22,
        category: "pizzas",
        name: "Mexicana",
        description: "Molho de tomate, mussarela, cebola, bacon, calabresa, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 35.9, M: 39.9, G: 43.9 }
    },
    {
        id: 23,
        category: "pizzas",
        name: "Mineira",
        description: "Molho de tomate, mussarela, catupiry, milho, frango desfiado e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 37.9, M: 39.9, G: 42.9 }
    },
    {
        id: 24,
        category: "pizzas",
        name: "Milho Verde",
        description: "Molho de tomate, mussarela, milho e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 36.9, M: 39.9, G: 44.9 }
    },
    {
        id: 25,
        category: "pizzas",
        name: "Mineirinha",
        description: "Molho de tomate, mussarela, catupiry, milho, frango, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 34.9, M: 44, G: 47.9 }
    },
    {
        id: 26,
        category: "pizzas",
        name: "Moda da Casa",
        description: "Molho de tomate, mussarela, ovo, catupiry, tomate, milho, frango desfiado, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 35.9, M: 44, G: 48.9 }
    },
    {
        id: 27,
        category: "pizzas",
        name: "Mussarela",
        description: "Molho de tomate, mussarela, tomate, mussarela e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 47.9, M: 44, G: 47.9 }
    },
    {
        id: 28,
        category: "pizzas",
        name: "Napolitana",
        description: "Molho de tomate, mussarela, alho, tomate, manjericão e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 35.9, M: 44, G: 47.9 }
    },
    {
        id: 29,
        category: "pizzas",
        name: "Palmito",
        description: "Molho de tomate, mussarela, palmito e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 35.9, M: 44.9, G: 47.9 }
    },
    {
        id: 30,
        category: "pizzas",
        name: "Peito de Peru",
        description: "Molho de tomate, mussarela, cheddar, peito de peru e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 37.9, M: 44.9, G: 49.9 }
    },
    {
        id: 31,
        category: "pizzas",
        name: "Peito de Peru aos Queijos",
        description: "Molho de tomate, mussarela, provolone, parmesão, cheddar, catupiry, peito de peru e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 40.9, M: 44, G: 49.9 }
    },
    {
        id: 32,
        category: "pizzas",
        name: "Poderoso Chefão",
        description: "Molho de tomate, mussarela, leblon, delícia, tatagia e ipanema e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 40.9, M: 45, G: 50.9 }
    },
    {
        id: 33,
        category: "pizzas",
        name: "Portuguesa",
        description: "Molho de tomate, mussarela, cebola, pimentão, tomate, calabresa, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 47.9, M: 44, G: 48.9 }
    },
    {
        id: 34,
        category: "pizzas",
        name: "Presunto",
        description: "Molho de tomate, mussarela, tomate, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 36.9, M: 41, G: 45.9 }
    },
    {
        id: 35,
        category: "pizzas",
        name: "Promussa",
        description: "Molho de tomate, mussarela, provolone, parmesão, tomate e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 37.9, M: 45.9, G: 49.9 }
    },
    {
        id: 36,
        category: "pizzas",
        name: "4 Queijos",
        description: "Molho de tomate, mussarela, provolone, parmesão, catupiry e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 41.9, M: 44.9, G: 49.9 }
    },
    {
        id: 37,
        category: "pizzas",
        name: "Siciliana",
        description: "Molho de tomate, mussarela, ovo, cebola, bacon, calabresa e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 39.9, M: 44, G: 47.9 }
    },
    {
        id: 38,
        category: "pizzas",
        name: "Santana",
        description: "Molho de tomate, mussarela, cebola, pimentão, ovo, bacon, calabresa, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 34.9, M: 40, G: 45.9 }
    },
    {
        id: 39,
        category: "pizzas",
        name: "Tatagua",
        description: "Molho de tomate, mussarela, creme de leite, cebola, champignon, frango desfiado, presunto e orégano.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 40.9, M: 45, G: 48.9 }
    },
    {
        id: 40,
        category: "pizzas",
        name: "Tomate Seco",
        description: "Molho de tomate, mussarela, tomate e orégano.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 37.9, M: 42, G: 44.9 }
    },
    {
        id: 41,
        category: "pizzas",
        name: "Toscana",
        description: "Molho de tomate, mussarela, alho, cebola, calabresa e orégano.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 34.9, M: 41.9, G: 45.9 }
    },
    {
        id: 42,
        category: "pizzas",
        name: "Vegetariana",
        description: "Molho de tomate, mussarela, milho, champignon, tomate, palmito e orégano.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        sizes: { P: 33.9, M: 41.9, G: 44.9 }
    },

    // ========== BEBIDAS ==========
    {
        id: 43,
        category: "bebidas",
        name: "Sukita Uva/Laranja",
        description: "Refrigerante Sukita nos sabores uva ou laranja.",
        image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=80",
        price: 12
    },
    {
        id: 44,
        category: "bebidas",
        name: "Kuat",
        description: "Refrigerante Kuat.",
        image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=80",
        price: 12
    },
    {
        id: 45,
        category: "bebidas",
        name: "Coca-Cola",
        description: "Refrigerante Coca-Cola.",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=80",
        price: 17
    },
    {
        id: 46,
        category: "bebidas",
        name: "Refrigerante 200ml",
        description: "Coca-Cola, Guaraná ou Pepsi.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
        price: 3
    },
    {
        id: 47,
        category: "bebidas",
        name: "Água",
        description: "Água mineral.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80",
        price: 3
    }
];

let cart = [];

const $ = id => document.getElementById(id);
const money = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const productsContainer = $("products");
const categories = document.querySelectorAll(".category");
const cartButton = $("cartButton");
const cartModal = $("cartModal");
const closeCart = $("closeCart");
const cartItems = $("cartItems");
const cartCount = $("cartCount");
const cartTotal = $("cartTotal");
const whatsappButton = $("whatsappButton");

function renderProducts(category = "pizzas") {
    productsContainer.innerHTML = "";
    products.filter(p => p.category === category).forEach(p => {
        const card = document.createElement("article");
        card.className = "product";
        card.innerHTML = `
            <div class="product-image" style="background-image:url('${p.image}')"></div>
            <div class="product-content">
                <h3>${p.name}</h3>
                <p class="product-description">${p.description}</p>
                ${p.sizes
                    ? `<div class="sizes">${["P", "M", "G"].map(s =>
                        `<button class="size" onclick="addToCart(${p.id},'${s}')">${s}<strong>${money(p.sizes[s])}</strong></button>`
                    ).join("")}</div>`
                    : `<div class="drink-price">
                        <span class="price">${money(p.price)}</span>
                        <button class="add-button" onclick="addToCart(${p.id})">+ Adicionar</button>
                    </div>`
                }
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

function addToCart(id, size = null) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const item = cart.find(x => x.id === id && x.size === size);
    if (item) item.quantity++;
    else cart.push({
        id,
        name: p.name,
        size,
        price: size ? p.sizes[size] : p.price,
        quantity: 1
    });
    updateCart();
    openCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    if (!cart.length) {
        cartItems.innerHTML = '<div style="text-align:center;color:#888;padding:40px 0">🛒<p>Seu carrinho está vazio.</p></div>';
        cartCount.textContent = "0";
        cartTotal.textContent = money(0);
        return;
    }
    let total = 0, count = 0;
    cart.forEach((x, i) => {
        const t = x.price * x.quantity;
        total += t;
        count += x.quantity;
        const d = document.createElement("div");
        d.className = "cart-item";
        d.innerHTML = `
            <div class="cart-item-top">
                <div>
                    <div class="cart-item-name">${x.name}</div>
                    ${x.size ? `<div class="cart-item-size">Tamanho: ${x.size}</div>` : ""}
                </div>
                <div class="cart-item-price">${money(t)}</div>
            </div>
            <div class="quantity">
                <button onclick="changeQuantity(${i},-1)">−</button>
                <span>${x.quantity}</span>
                <button onclick="changeQuantity(${i},1)">+</button>
                <button class="remove" onclick="removeItem(${i})">Remover</button>
            </div>
        `;
        cartItems.appendChild(d);
    });
    cartCount.textContent = count;
    cartTotal.textContent = money(total);
}

function changeQuantity(i, a) {
    cart[i].quantity += a;
    if (cart[i].quantity <= 0) cart.splice(i, 1);
    updateCart();
}

function removeItem(i) {
    cart.splice(i, 1);
    updateCart();
}

function openCart() {
    cartModal.classList.add("active");
}

function closeCartModal() {
    cartModal.classList.remove("active");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartModal);
cartModal.addEventListener("click", e => {
    if (e.target === cartModal) closeCartModal();
});

categories.forEach(b => b.addEventListener("click", () => {
    categories.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderProducts(b.dataset.category);
}));

whatsappButton.addEventListener("click", () => {
    if (!cart.length) return alert("Adicione pelo menos um produto ao pedido.");
    const name = $("customerName").value.trim();
    const address = $("customerAddress").value.trim();
    const observation = $("customerObservation").value.trim();
    if (!name) return alert("Digite seu nome.");
    if (!address) return alert("Digite o endereço para entrega.");
    let total = 0;
    let message = "🍕 *NOVO PEDIDO - PIZZARIA CORLEONE*%0A%0A👤 *Nome:* " + name + "%0A📍 *Endereço:* " + address + "%0A%0A*PEDIDO:*%0A";
    cart.forEach(x => {
        const t = x.price * x.quantity;
        total += t;
        message += `• ${x.quantity}x ${x.name}${x.size ? ` (${x.size})` : ""} - ${money(t)}%0A`;
    });
    message += `%0A💰 *Total: ${money(total)}*`;
    if (observation) message += `%0A%0A📝 *Observação:* ${observation}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}%0A%0A_Aguardo confirmação do pedido._`, "_blank");
});

renderProducts();
updateCart();
