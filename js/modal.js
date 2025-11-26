// 1️⃣ Cargar el modal.html automáticamente
document.addEventListener("DOMContentLoaded", () => {

    fetch("../pages/modal.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("modalContainer").innerHTML = html;

            // 2️⃣ Ahora que el modal existe, activamos eventos
            inicializarModalSistema();
        });
});


// 3️⃣ Función que asigna eventos y prepara todo
function inicializarModalSistema() {

    // Evento del botón Confirmar (si existe en esta página)
    const btnConfirmar = document.getElementById("btnConfirmar");
    if (btnConfirmar) {
        btnConfirmar.addEventListener("click", function () {
            mostrarModal(
                "success",
                "Pedido Confirmado",
                "Tu compra se ha completado con éxito."
            );
        });
    }

    const btnRegistro = document.getElementById("btnRegistro")
    if (btnRegistro) {
        btnRegistro.addEventListener("click", () => {
            mostrarModal(
                "success",
                "Registro Completado",
                "Tu cuenta ha sido creada correctamente."
            );
        });
    }

    const btnLogin = document.getElementById("btnLogin");
    if (btnLogin) {
        btnLogin.addEventListener("click", () => {
            mostrarModal(
                "success",
                "Sesión Iniciada",
                "Bienvenido nuevamente a Football Legacy."
            );
        });
    }
}

// 4️⃣ Función principal del modal
function mostrarModal(tipo, titulo, mensaje) {
    const header = document.getElementById("modalHeader");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalMensaje = document.getElementById("modalMensaje");

    // Reset
    header.className = "modal-header text-white";

    switch (tipo) {
        case "success": header.classList.add("bg-success"); break;
        case "error": header.classList.add("bg-danger"); break;
        case "warning": header.classList.add("bg-warning"); break;
        default: header.classList.add("bg-info");
    }

    modalTitulo.textContent = titulo;
    modalMensaje.textContent = mensaje;

    const modal = new bootstrap.Modal(document.getElementById("modalGlobal"));
    modal.show();
}
