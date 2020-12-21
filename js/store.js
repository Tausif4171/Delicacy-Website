let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Kaju Crush",
        tag: "kajucrush",
        price: 280,
        quantity: 200,
        inCart: 0
    },
    {
        name: "Dry Fruits",
        tag: "dryfruits",
        price: 240,
        quantity: 200,
        inCart: 0
    },
    {
        name: "Badam",
        tag: "badam",
        price: 192,
        quantity: 200,
        inCart: 0
    },
    {
        name: "Kaju Badam Kesar",
        tag: "kajubadamkesar",
        price: 192,
        quantity: 200,
        inCart: 0
    },
    {
        name: "Kaju",
        tag: "kaju",
        price: 192,
        quantity: 200,
        inCart: 0
    },
    {
        name: "Choco Crush",
        tag: "chococrush",
        price: 176,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Black Sesame",
        tag: "blacksesame",
        price: 176,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Rose Kaju",
        tag: "rosekaju",
        price: 220,
        quantity: 200,
        inCart: 0
    },
    {
        name: "Strawberry",
        tag: "strawberry",
        price: 360,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Ground Nut",
        tag: "groundnut",
        price: 141,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Til",
        tag: "til",
        price: 158,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Crush",
        tag: "crush",
        price: 141,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Chana",
        tag: "chana",
        price: 141,
        quantity: 400,
        inCart: 0
    },
    {
        name: "Coconut",
        tag: "coconut",
        price: 158,
        quantity: 400,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.nav-link span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.nav-link span').textContent = productNumbers - 1;
        console.log("action running");
    } else if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.nav-link span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.nav-link span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        let currentProduct = product.tag;

        if (cartItems[currentProduct] == undefined) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        }
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    let cart = localStorage.getItem("totalCost");

    if (action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if (cart != null) {

        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);

    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map((item, index) => {
            productContainer.innerHTML +=
                `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./images/${item.tag}.jpg" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">₹${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="remove-circle-outline"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="add-circle-outline"></ion-icon>   
            </div>
            <div class="total">₹${item.inCart * item.price}</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">           Total</h4>
                <h4 class="basketTotal">₹${cart}</h4>
            </div>`
        if (cart >= 200) {
            productContainer.innerHTML += `
            <div class="checkOut">
                <a href="order.html">
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </a>
                <h4 style="color: #8e0e0e;">Check Out</h4> 
                
            </div>
        `
        }
        else{
            productContainer.innerHTML += `
            <div class="checkOut">
                <h2>Cart Value Must be minimum ₹200</h2>
            </div>
        `
        }
        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);

            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);
            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();
