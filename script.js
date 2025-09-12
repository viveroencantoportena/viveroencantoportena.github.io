// =============================
// ANIMACIONES AL CARGAR
// =============================
window.onload = () => {
    // Animaciones
    document.querySelectorAll('.animate').forEach(element => {
        element.classList.add('show');
    });

    // Detectar categoría y mostrar productos
    const categoria = getCategoriaActual();
    if (categoria) {
        renderResults(productosPorCategoria[categoria]);
        renderProductos();
    }
};

// =============================
// MENÚ HAMBURGUESA
// =============================
const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// =============================
// LISTA DE PRODUCTOS POR CATEGORÍA
// =============================
const productosPorCategoria = {
    helechos: [
        {
            imagen: "https://obliqua.mx/cdn/shop/products/Helecho_nido_deave.jpg?v=1593623558",
            nombre: "Nido de Ave",
            precio: "$15000",
            enStock: false,
            descripcion: "Ideal para interiores, fácil de cuidar y resiste a la sequía."
        },
        {
            imagen: "https://hortology.co.uk/cdn/shop/files/Doryopteris-pedata-Digit-Fern-12x35cm_1600x.jpg?v=1692104801",
            nombre: "Flora del Conosur",
            precio: "$18000",
            enStock: true,
            descripcion: "Planta decorativa que se adapta a lugares con poca luz."
        }
    ],
    cactus: [
        {
            imagen: "https://acdn.mitiendanube.com/stores/003/960/867/products/cola-de-zorro-1.jpg",
            nombre: "Cola de Zorro",
            precio: "$20000",
            enStock: true,
            descripcion: "Planta acuática conocida como mil hojas de agua o pinito de agua."
        }
    ],
    flores: [
        {
            imagen: "https://example.com/flor.jpg",
            nombre: "Rosa Roja",
            precio: "$10000",
            enStock: true,
            descripcion: "Clásica flor para decoración."
        }
    ],
    frutales: [
        {
            imagen: "https://example.com/frutal.jpg",
            nombre: "Limonero",
            precio: "$35000",
            enStock: true,
            descripcion: "Árbol frutal que da limones todo el año."
        }
    ],
    jardineria: [
        {
            imagen: "https://example.com/pala.jpg",
            nombre: "Pala de Jardín",
            precio: "$5000",
            enStock: true,
            descripcion: "Herramienta básica para jardinería."
        }
    ]
};

// =============================
// DETECTAR CATEGORÍA SEGÚN URL
// =============================
function getCategoriaActual() {
    const pagina = window.location.pathname.split("/").pop().toLowerCase(); 
    if (pagina.includes("helechos")) return "helechos";
    if (pagina.includes("cactus")) return "cactus";
    if (pagina.includes("flores")) return "flores";
    if (pagina.includes("frutales")) return "frutales";
    if (pagina.includes("jardineria")) return "jardineria";
    return null;
}

// =============================
// RENDERIZAR RESULTADOS DE BÚSQUEDA
// =============================
function renderResults(lista) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!lista || lista.length === 0) {
        resultsDiv.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
    }

    lista.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
          <img src="${prod.imagen}" alt="${prod.nombre}">
          <h3>${prod.nombre}</h3>
          <p class="precio">${prod.precio}</p>
          <span class="stock ${prod.enStock}">${prod.enStock ? "En stock" : "Agotado"}</span>
          <p>${prod.descripcion}</p>
        `;
        resultsDiv.appendChild(div);
    });
}

// =============================
// FUNCIÓN DE BÚSQUEDA
// =============================
function searchStock() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const categoria = getCategoriaActual();
    const lista = productosPorCategoria[categoria] || [];
    const filtrados = lista.filter(p => p.nombre.toLowerCase().includes(input));
    renderResults(filtrados);
}

// =============================
// RENDERIZAR PRODUCTOS (tarjetas)
// =============================
const productosContainer = document.querySelector('.productos-container');

function renderProductos() {
    const categoria = getCategoriaActual();
    const lista = productosPorCategoria[categoria] || [];

    lista.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.classList.add('product-img');
        productCard.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = producto.nombre;
        name.classList.add('product-name');
        productCard.appendChild(name);

        const price = document.createElement('span');
        price.textContent = producto.precio;
        price.classList.add('product-price');
        productCard.appendChild(price);

        const stockStatus = document.createElement('p');
        stockStatus.classList.add('stock-status');
        stockStatus.textContent = producto.enStock ? 'En stock' : 'Agotado';
        stockStatus.classList.add(producto.enStock ? 'in-stock' : 'out-of-stock');
        productCard.appendChild(stockStatus);

        const desc = document.createElement('p');
        desc.textContent = producto.descripcion;
        desc.classList.add('product-desc');
        productCard.appendChild(desc);

        productosContainer.appendChild(productCard);
    });
}

// =============================
// CARRUSEL
// =============================
let currentSlide = 0;
let autoSlideInterval;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    clearInterval(autoSlideInterval);
    showSlide(currentSlide + step);
    autoSlide();
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
document.getElementById('next').addEventListener('click', () => moveSlide(1));
showSlide(currentSlide);
autoSlide();



