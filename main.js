function jugarAdivinaNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    let intentos = 0;
    let adivinado = false;

    while (adivinado === false) {
        const intento = parseInt(prompt("Intenta adivinar un numero entre 1 y 100:"));
        intentos++;

        if (intento === numeroAleatorio) {
            alert("¡felicitaciones! El numero era " + numeroAleatorio + ". Lo adivinaste en " + intentos + " intentos.");
            adivinado = true;
            jugarAdivinaNumero();

        } else if (intento < numeroAleatorio) {
            alert ("El numero es mas alto. Intente otra vez:");

        } else {
            alert("El numero es mas bajo. Intenta otra vez.");
        }
    }
}

jugarAdivinaNumero();