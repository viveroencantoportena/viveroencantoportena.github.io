// Función para mostrar la animación cuando la página carga
window.onload = function() {
    document.querySelectorAll('.animate').forEach(element => {
        element.classList.add('show');
    });
};

// Menú hamburguesa para móvil
const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Lista de productos
const productos = [
    {
        imagen: "https://acdn.mitiendanube.com/stores/003/960/867/products/cola-de-zorro-1-5f48256d8be95c761317102650874453-1024-1024.jpg",
        nombre: "Cola de Zorro",
        precio: "$20000",
        enStock: true,
        descripcion: "Esta planta acuática es conocida como mil hojas de agua, bejuquillo, cola de zorro o pinito de agua."
    },
    {
        imagen: "https://obliqua.mx/cdn/shop/products/Helecho_nido_deave.jpg?v=1593623558",
        nombre: "Nido de Ave",
        precio: "$15000",
        enStock: false,
        descripcion: "Ideal para interiores, fácil de cuidar y resiste a la sequía por largos periodos de tiempo."
    },
    {
        imagen: "https://hortology.co.uk/cdn/shop/files/Doryopteris-pedata-Digit-Fern-12x35cm_1600x.jpg?v=1692104801",
        nombre: "Flora del Conosur",
        precio: "$18000",
        enStock: true,
        descripcion: "Planta decorativa que se adapta a lugares con poca luz."
    },
    {
        imagen: "https://acdn.mitiendanube.com/stores/003/960/867/products/cola-de-zorro-1-5f48256d8be95c761317102650874453-1024-1024.jpg",
        nombre: "Cola de Zorro",
        precio: "$20000",
        enStock: true,
        descripcion: "Esta planta acuática es conocida como mil hojas de agua, bejuquillo, cola de zorro o pinito de agua."
    },
    {
        imagen: "https://acdn.mitiendanube.com/stores/003/960/867/products/cola-de-zorro-1-5f48256d8be95c761317102650874453-1024-1024.jpg",
        nombre: "Cola de Zorro",
        precio: "$20000",
        enStock: true,
        descripcion: "Esta planta acuática es conocida como mil hojas de agua, bejuquillo, cola de zorro o pinito de agua."
    },
    {
        imagen: "https://acdn.mitiendanube.com/stores/003/960/867/products/cola-de-zorro-1-5f48256d8be95c761317102650874453-1024-1024.jpg",
        nombre: "Cola de Zorro",
        precio: "$20000",
        enStock: true,
        descripcion: "Esta planta acuática es conocida como mil hojas de agua, bejuquillo, cola de zorro o pinito de agua."
    },

    
];

// Selecciona el contenedor donde se mostrarán los productos
const productosContainer = document.querySelector('.productos-container');

// Función para renderizar los productos
function renderProductos() {
    productos.forEach(producto => {
        // Crea un div para cada producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Agrega la imagen del producto
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.classList.add('product-img');
        productCard.appendChild(img);

        // Agrega el nombre del producto
        const name = document.createElement('h3');
        name.textContent = producto.nombre;
        name.classList.add('product-name');
        productCard.appendChild(name);

        // Agrega el precio del producto
        const price = document.createElement('span');
        price.textContent = producto.precio;
        price.classList.add('product-price');
        productCard.appendChild(price);

        // Agrega el estado de stock
        const stockStatus = document.createElement('p');
        stockStatus.classList.add('stock-status');
        stockStatus.textContent = producto.enStock ? 'En stock' : 'Agotado';
        stockStatus.classList.add(producto.enStock ? 'in-stock' : 'out-of-stock');
        productCard.appendChild(stockStatus);

        // Agrega la descripción del producto
        const desc = document.createElement('p');
        desc.textContent = producto.descripcion;
        desc.classList.add('product-desc');
        productCard.appendChild(desc);

        // Añade la tarjeta de producto al contenedor
        productosContainer.appendChild(productCard);
    });
}

// Llama a la función para mostrar los productos
renderProductos();


let currentSlide = 0;
let autoSlideInterval;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

// Función para mostrar el slide actual
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

// Función para avanzar o retroceder manualmente
function moveSlide(step) {
    clearInterval(autoSlideInterval); // Detiene el auto-slide cuando el usuario usa los botones
    showSlide(currentSlide + step);
    autoSlide(); // Reinicia el auto-slide después de interactuar
}

// Función para auto deslizarse cada 5 segundos
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Inicializar carrusel
document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
document.getElementById('next').addEventListener('click', () => moveSlide(1));
showSlide(currentSlide);
autoSlide();