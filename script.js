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
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0008.jpg?raw=true",
            nombre: "Palo de agua 3L",
            precio: "$14000",
            enStock: true,
            descripcion: "Puede alcanzar varios metros de altura, se adapta bien a luz indirecta o sombra parcial, <br> y su cultivo favorece la purificación del aire y la creación de un ambiente de tranquilidad, <br>lo que la hace popular para la decoración del hogar. ."
        },
        {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0009.jpg?raw=true",
            nombre: "Anglonoema",
            precio: "$50000",
            enStock: true,
            descripcion: "Planta decorativa."
        },
         {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0009.jpg?raw=true",
            nombre: "Anglonoema",
            precio: "$18000",
            enStock: true,
            descripcion: "Planta decorativa."
        },
        {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0010.jpg?raw=true",
            nombre: "Gomero",
            precio: "$30000",
            enStock: true,
            descripcion: "hojas grandes, gruesas y brillantes, de color verde oscuro, y su tronco macizo."
        },

        {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0012.jpg?raw=true",
            nombre: "Helecho de espada",
            precio: "$18000",
            enStock: true,
            descripcion: "En su hábitat natural, puede crecer hasta 210 cm de alto. Es un helecho fácil y popular para cultivar en interiores."
        },

        {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0017.jpg?raw=true",
            nombre: "Repollitos",
            precio: "$18000",
            enStock: true,
            descripcion: "Suculenta con forma de repollo, facil de cuidar."
        },
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
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0007.jpg?raw=true",
            nombre: "Azalea",
            precio: "$14000",
            enStock: true,
            descripcion: "Clásica flor para decoración."
        },
         {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0011.jpg?raw=true",
            nombre: "Sphatifilium",
            precio: "$13000",
            enStock: true,
            descripcion: "Clásica flor para decoración."
        },

         {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0013.jpg?raw=true",
            nombre: "Kalanchoes",
            precio: "$13000",
            enStock: true,
            descripcion: "Clásica flor para decoración."
        },

         {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0014.jpg?raw=true",
            nombre: "Kala de color",
            precio: "$13000",
            enStock: true,
            descripcion: "Kala de color lila."
        },
         {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0015.jpg?raw=true",
            nombre: "Kala de color",
            precio: "$13000",
            enStock: true,
            descripcion: "Kala de color naranja."
        },

        {
            imagen: "https://github.com/viveroencantoportena/viveroencantoportena.github.io/blob/main/fotosstock/IMG-20250916-WA0018.jpg?raw=true",
            nombre: "Orquídeas",
            precio: "$13000",
            enStock: true,
            descripcion: "Hermosa flor para regalar."
        },
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
    if (pagina.includes("elechos")) return "helechos";
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









