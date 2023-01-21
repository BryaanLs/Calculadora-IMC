const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado(`Peso invalido!`, false);
        return
    } else if (!altura) {
        setResultado(`Altura invalida!`, false);
        return
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é: ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.result');
    resultado.innerHTML = '';
    const p = criaParagrafo();
    if (isValid) {
        p.classList.add('isValid')
    } else if (!isValid) {
        p.classList.add('notValid')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}