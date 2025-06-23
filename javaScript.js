console.log("Hola mundo desde javascript.js");

// ✅ 1. Seleccionar elementos
const titulo = document.getElementById('titulo');
const button = document.querySelector('#btn');
const caja = document.querySelector('.caja');
const imagen = document.getElementById('miImagen');



// ✅ 2. Cambiar contenido
titulo.textContent = "Hola Grupo";  // cambia texto
caja.innerHTML = "<p><strong>Contenido con HTML</strong>, asi de esta manera podemos agregar diferentes elementos</p>";  // cambia HTML interno



// ✅ 3. Leer y cambiar atributos
console.log(imagen.src);
imagen.src = "https://img.freepik.com/fotos-premium/mujer-cyborg-o-robot-ia-arrodillo-plataforma-futurista-ciberespacio-mujer-robot-cara-3d-ilustracion_76964-5192.jpg";



// ✅ 4. Cambiar estilos directos
titulo.style.color = "yellow";



// ✅ 5. Manipular clases
caja.classList.add('activo'); // añade clase
caja.classList.toggle('activo'); // la quita (porque ya estaba)
caja.classList.toggle('activo'); // la vuelve a poner

// ✅ 6. Crear y agregar elementos nuevos
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = "Soy un párrafo creado con JS";
nuevoParrafo.classList.add('nuevo');
document.body.appendChild(nuevoParrafo);

// ✅ 7. Eliminar elementos después de 5 segundos
/* setTimeout(() => {
  nuevoParrafo.remove();
  console.log("Párrafo eliminado");
}, 5000);
 */
// ✅ 8. Escuchar eventos
button.addEventListener('click', () => {
  alert("Me diste un click");

  // Extra: crear otro elemento al hacer click
  const otro = document.createElement('div');
  otro.textContent = "¡Nuevo div por click!";
  otro.classList.add('nuevo');
  document.body.appendChild(otro);
});
