const products = [
    { title: "Product 1", desc: "High-quality item", price: "$20", img: "assets/images/product1.jpg" },
    { title: "Product 2", desc: "Exclusive design", price: "$35", img: "assets/images/product2.jpg" },
    { title: "Product 3", desc: "Best seller", price: "$25", img: "assets/images/product3.jpg" },
    { title: "Product 4", desc: "New arrival", price: "$30", img: "assets/images/product4.jpg" },
    { title: "Product 5", desc: "Limited edition", price: "$40", img: "assets/images/product5.jpg" },
    { title: "Product 6", desc: "Trending now", price: "$22", img: "assets/images/product6.jpg" },
    { title: "Product 7", desc: "Great deal", price: "$27", img: "assets/images/product7.jpg" },
    { title: "Product 8", desc: "Exclusive item", price: "$32", img: "assets/images/product8.jpg" },
    { title: "Product 9", desc: "Premium quality", price: "$45", img: "assets/images/product9.jpg" },
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    card.innerHTML = `
        <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.desc}</p>
                <p class="card-text"><strong>${product.price}</strong></p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(card);
});

