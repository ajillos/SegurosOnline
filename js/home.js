
var desp = document.getElementById('desp');
function mostrarContenido(clickeado) {
    const contenido = clickeado.nextElementSibling;

    if (contenido.style.display === 'none') {
        contenido.style.display = 'block';
    } else {
        contenido.style.display = 'none';
    }
}

var greenAlert = document.getElementById('greenAlert');
var redAlert = document.getElementById('redAlert');
function Reg() {
    greenAlert.style.display = "block";
}
function Login() {
    redAlert.style.display = "block";
}

function wave(clickeado) {
    var onda = document.createElement('div');
    onda.className = 'ondeante';
    document.body.appendChild(onda);
    var rect = clickeado.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    onda.style.left = x + 'px';
    onda.style.top = y + 'px';
    alert('bob')

    // Elimina la onda después de la animación
    onda.addEventListener('animationend', function () {
        clickeado.parentNode.removeChild(clickeado);
    });
};

