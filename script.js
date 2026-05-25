// Base de datos de comparación estática
const especificacionesComparador = {
    chips: {
        titan: { nombre: "Snapdragon 8 Elite / A19 Pro", nodo: "3nm N3E TSMC", velocidad: "4.32 GHz Max", npu: "50 TOPS" },
        competencia: { nombre: "Dimensity 9400 / Exynos 2500", nodo: "3nm / 4nm", velocidad: "3.63 GHz", npu: "45 TOPS" }
    },
    camaras: {
        titan: { nombre: "Sony LYT-900 (1 Pulgada)", nodo: "1.02\" Apertura Física Variable", velocidad: "OIS por Desplazamiento", npu: "Lente Óptico Leica/Zeiss 8P" },
        competencia: { nombre: "ISOCELL HP2 (1/1.3\")", nodo: "0.78\" Zoom Digital", velocidad: "OIS Mecánico Estándar", npu: "Lente Plástico Revestido 7P" }
    }
};

// ARREGLO DE OBJETOS: Añadida la ruta interna de la imagen (`rutaImagen`) a cada objeto
const datasetTelefonos = {
    samsung_s26_ultra: {
        rutaImagen: "samsung s26.jfif",
        specs: [
            { parametro: "Procesador", valor: "Snapdragon 8 Elite for Galaxy (3nm)" },
            { parametro: "Pantalla", valor: "6.9\" Dynamic AMOLED 2X, Anti-reflejos Gorilla Armor" },
            { parametro: "Cámara Principal", valor: "200 MP ISOCELL HP3 + Sensor ISOCELL de 1 Pulgada" },
            { parametro: "Teleobjetivo", valor: "Periscopio 50 MP (Zoom Óptico 5x y 10x Dinámico)" },
            { parametro: "Batería y Carga", valor: "5500 mAh con carga Ultra Rápida de 65W" },
            { parametro: "Inteligencia Artificial", valor: "Galaxy AI Avanzada v3 (Procesamiento 100% Local)" }
        ]
    },
    iphone_17_pro_max: {
        rutaImagen: "aifon 17.jpg",
        specs: [
            { parametro: "Procesador", valor: "Apple A19 Pro (Nodo de 3nm Mejorado TSMC)" },
            { parametro: "Pantalla", valor: "6.86\" Super Retina XDR con sustrato OLED ultrabrillante" },
            { parametro: "Cámara Principal", valor: "48 MP Pro-Fusion de 1/1.12\" + Lente de Cristal" },
            { parametro: "Teleobjetivo", valor: "Tetraprisma de 48 MP con Zoom Óptico Estabilizado 6x" },
            { parametro: "Estructura", valor: "Chasis Integrado de Titanio de Grado 5 Aeroespacial" },
            { parametro: "Inteligencia Artificial", valor: "Apple Intelligence v2 con NPU Privada de 16 Núcleos" }
        ]
    },
    xiaomi_15_ultra: {
        rutaImagen: "xiaomi 15.avif",
        specs: [
            { parametro: "Procesador", valor: "Snapdragon 8 Elite (Arquitectura Oryon)" },
            { parametro: "Pantalla", valor: "6.73\" 2K AMOLED C9 Pro, Tasa de Muestreo de 2160Hz PWM" },
            { parametro: "Cámara Principal", valor: "50 MP Sony LYT-900 de 1 Pulgada Física Completa" },
            { parametro: "Óptica Integrada", valor: "Lentes Co-Desarrolladas con Leica (Summilux f/1.4 - f/4.0)" },
            { parametro: "Teleobjetivo", valor: "Dual Periscopio (50 MP 3x + 50 MP 5x Estabilizado)" },
            { parametro: "Batería", valor: "6000 mAh de Silicio-Carbono con carga de 90W" }
        ]
    },
    google_pixel_9_ultra: {
        rutaImagen: "img/google_pixel_9_ultra.png",
        specs: [
            { parametro: "Procesador", valor: "Google Tensor G5 (Primer Chip 100% diseñado por Google)" },
            { parametro: "Pantalla", valor: "6.8\" Actua Display OLED, Brillo Pico de 3000 nits" },
            { parametro: "Cámara Principal", valor: "50 MP Octa PD con Inteligencia Fotográfica Computacional" },
            { parametro: "Procesamiento de Imagen", valor: "Chip de Imagen TPU Edge dedicado para video nocturno" },
            { parametro: "Ecosistema IA", valor: "Gemini Advanced integrado de fábrica en el núcleo del sistema" },
            { parametro: "Soporte de Ingeniería", valor: "7 Años de Actualizaciones Completas de Kernel y Sistema" }
        ]
    },
    vivo_x300_ultra: {
        rutaImagen: "img/vivo_x300_ultra.png",
        specs: [
            { parametro: "Procesador", valor: "MediaTek Dimensity 9400 (All Big Core Architecture)" },
            { parametro: "Pantalla", valor: "6.78\" Samsung E7 AMOLED Curva 1.5K" },
            { parametro: "Cámara Principal", valor: "50 MP Sony LYT-900 de 1 Pulgada Estabilizada Mecánicamente" },
            { parametro: "Teleobjetivo", valor: "Sensor APO Periscopio Zeiss de 200 Megapíxeles (Zoom 100x)" },
            { parametro: "Chip Coprocesador", valor: "Vivo V4 Imaging Chip para Grabación Cinematic 4K Portrait" },
            { parametro: "Carga", valor: "5700 mAh con Carga Flash de 100W por Cable" }
        ]
    },
    huawei_pura_80: {
        rutaImagen: "img/huawei_pura_80.png",
        specs: [
            { parametro: "Procesador", valor: "HiSilicon Kirin 9100 (Estructura Multihilo Avanzada)" },
            { parametro: "Pantalla", valor: "6.8\" OLED LTPO de Cuatro Curvaturas con Cristal Kunlun Glass 3" },
            { parametro: "Cámara Principal", valor: "50 MP Sensor Retráctil Mecánico con Apertura Física de f/1.6" },
            { parametro: "Sistema de Color", valor: "Arquitectura XMAGE Ultra-Espectro (Captación RYYB)" },
            { parametro: "Conectividad", valor: "Sistema Satelital de Doble Vía (Mensajes y Llamadas de Voz)" },
            { parametro: "Sistema Operativo", valor: "HarmonyOS NEXT puro (Arquitectura de Microkernel)" }
        ]
    },
    oppo_find_x9_ultra: {
        rutaImagen: "img/oppo_find_x9_ultra.png",
        specs: [
            { parametro: "Procesador", valor: "Snapdragon 8 Elite Premium Configuration" },
            { parametro: "Pantalla", valor: "6.82\" BOE X2 Diamond AMOLED, Resolución 2K Completamente Plana" },
            { parametro: "Cámara Principal", valor: "Dual Sensor de 1 pulgada (Principal + Gran Angular Estructural)" },
            { parametro: "Ajuste de Color", valor: "Calibración Cromática Hasselblad de Quinta Generación" },
            { parametro: "Teleobjetivo", valor: "Sensores Duales Periscópicos con Prismas de Reflexión Inversa" },
            { parametro: "Batería", valor: "5800 mAh con carga SuperVOOC inteligente de 100W" }
        ]
    },
    motorola_signature: {
        rutaImagen: "motorola signature.png",
        specs: [
            { parametro: "Procesador", valor: "Snapdragon 8 Elite Extreme Edition" },
            { parametro: "Pantalla", valor: "6.7\" pOLED Endless Edge, Tasa de Refresco de 165Hz" },
            { parametro: "Cámara Principal", valor: "50 MP OmniVision OV50H de gran formato + Estabilización Avanzada" },
            { parametro: "Materiales Especiales", valor: "Acabado trasero en Cuero Vegano Premium y chasis de Fibra de Carbono" },
            { parametro: "Ecosistema Computacional", valor: "Plataforma Ready For inalámbrica para modo escritorio" },
            { parametro: "Audio", valor: "Altavoces Estéreo Ajustados con Dolby Atmos Spatial Sound" }
        ]
    }
};

function cambiarFichaComparador(tipo) {
    const contenedor = document.getElementById('datos-comparador');
    const data = especificacionesComparador[tipo];
    if (!data) return;

    contenedor.innerHTML = `
        <div class="col-comp">
            <h4>🏆 Estándar Absoluto</h4>
            <div class="spec-item"><span>Componente:</span> <span>${data.titan.nombre}</span></div>
            <div class="spec-item"><span>Estructura:</span> <span>${data.titan.nodo}</span></div>
            <div class="spec-item"><span>Rendimiento:</span> <span>${data.titan.velocidad}</span></div>
            <div class="spec-item"><span>Ventaja:</span> <span>${data.titan.npu}</span></div>
        </div>
        <div class="col-comp">
            <h4>Gama Alta Convencional</h4>
            <div class="spec-item"><span>Componente:</span> <span>${data.competencia.nombre}</span></div>
            <div class="spec-item"><span>Estructura:</span> <span>${data.competencia.nodo}</span></div>
            <div class="spec-item"><span>Rendimiento:</span> <span>${data.competencia.velocidad}</span></div>
            <div class="spec-item"><span>Ventaja:</span> <span>${data.competencia.npu}</span></div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const selectorModelos = document.getElementById('phone-selector');
    const fichaLayout = document.getElementById('ficha-layout');
    const imgElement = document.getElementById('phone-view');
    const specsContainer = document.getElementById('specs-table-container');

    // Cambios lógicos para automatizar la renderización sin interactuar con ficheros manuales
    selectorModelos.addEventListener('change', () => {
        const modeloSeleccionado = selectorModelos.value;
        const telefono = datasetTelefonos[modeloSeleccionado];

        if (telefono) {
            specsContainer.innerHTML = ''; // Limpiar registros anteriores

            // 1. Cambiar el título
            const textoModelo = selectorModelos.options[selectorModelos.selectedIndex].text;
            document.getElementById('phone-title-display').innerText = textoModelo;

            // 2. Colocar la ruta de la imagen preguardada
            imgElement.src = telefono.rutaImagen;
            imgElement.alt = `Diseño de ${textoModelo}`;

            // 3. Insertar las características técnicas abajo de la imagen
            telefono.specs.forEach(spec => {
                const fila = document.createElement('div');
                fila.className = 'spec-item';
                fila.innerHTML = `<span>${spec.parametro}:</span> <span>${spec.valor}</span>`;
                specsContainer.appendChild(fila);
            });

            // Mostrar el contenedor aplicando los estilos estructurados
            fichaLayout.style.display = 'flex';
        }
    });

    // Controlador del Comparador Inferior
    const btnChips = document.getElementById('btn-chips');
    const btnCamaras = document.getElementById('btn-camaras');
    const botones = [btnChips, btnCamaras];

    btnChips.addEventListener('click', (e) => {
        botones.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        cambiarFichaComparador('chips');
    });

    btnCamaras.addEventListener('click', (e) => {
        botones.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        cambiarFichaComparador('camaras');
    });

    cambiarFichaComparador('chips');
});