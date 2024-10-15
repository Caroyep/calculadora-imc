// calcula IMC y mostrar recomendaciones
document.getElementById("formIMC").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por usuario
    const nombre = document.getElementById("nombre").value;
    const genero = document.getElementById("genero").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

    // Calcular el IMC
    const imc = peso / (estatura * estatura);
    let condicion = "";
    let recomendaciones = "";

    // Criterios de la OMS diferenciados por género
    if (genero === "masculino") {
        if (imc < 18.5) {
            condicion = "bajo peso";
            recomendaciones = "Agregar una dieta rica en proteínas y calorías.";
        } else if (imc >= 18.5 && imc < 25) {
            condicion = "peso normal";
            recomendaciones = "felicidades, continúa en dieta equilibrada y variada.";
        } else if (imc >= 25 && imc < 30) {
            condicion = "sobrepeso";
            recomendaciones = "Reducción moderada en calorías y ejercicio.";
        } else {
            condicion = "obesidad";
            recomendaciones = "Reducción significativa en calorías y consulta con un profesional.";
        }
    } else {
        if (imc < 18.5) {
            condicion = "bajo peso";
            recomendaciones = "Agregar una dieta rica en proteínas y calorías.";
        } else if (imc >= 18.5 && imc < 24) {
            condicion = "peso normal";
            recomendaciones = "Felicidades, continúa con una dieta equilibrada y variada.";
        } else if (imc >= 24 && imc < 29) {
            condicion = "sobrepeso";
            recomendaciones = "Reducción moderada en calorías y ejercicio.";
        } else {
            condicion = "obesidad";
            recomendaciones = "Reducción significativa en calorías y consulta con un profesional.";
        }
    }

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>${nombre}, tu IMC es ${imc.toFixed(2)} (${condicion}).</p>`;
    resultado.innerHTML += `<p>Recomendación: ${recomendaciones}</p>`;

    // Mostrar el botón de nuevo cálculo
    document.getElementById("nuevoCalculo").classList.remove("hidden");
});

// reiniciar el formulario cuando se hace clic en "Nuevo cálculo"
document.getElementById("nuevoCalculo").addEventListener("click", function() {
    // Resetear el formulario
    document.getElementById("formIMC").reset();

    // Limpiar el resultado
    document.getElementById("resultado").innerHTML = "";

    // Ocultar otra vez el botón de nuevo cálculo
    document.getElementById("nuevoCalculo").classList.add("hidden");
});
