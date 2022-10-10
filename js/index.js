const txtPeso = document.getElementById('peso');
const txtAltura = document.getElementById('altura');
const btnCalcular = document.getElementById('calcular');
const txtResultado = document.getElementById('imc');
const txtNivel = document.getElementById('nivel');

const imPeso = new Inputmask("9[9][9,9][9]");
imPeso.mask(txtPeso);
txtPeso.addEventListener('keyup', (e) => {
    if (e.key === "Enter") txtAltura.focus();
})

const imAltura = new Inputmask("9,99");
imAltura.mask(txtAltura);
txtAltura.addEventListener('keyup', (e) => {
    if (e.key === "Enter") btnCalcular.focus();
})

const calcularIMC = (peso, altura, casasDecimais = 1) => { 
    const imc = peso / (altura * altura);
    return imc.toFixed(casasDecimais);
}

const indicarNivelIMC = (imc) => {
    let nivel = '';

    if (imc < 18.5) nivel = 'Abaixo do peso';
    else if (imc >= 18.5 && imc <= 24.9) nivel = 'Peso normal';
    else if (imc >= 25 && imc <= 29.9) nivel = 'Sobrepeso';
    else if (imc >= 30 && imc <= 34.9) nivel = 'Obesidade grau 1';
    else if (imc >= 35 && imc <= 39.9) nivel = 'Obesidade grau 2';
    else if (imc >= 40) nivel = 'Obesidade grau 3';
    
    return nivel;
};

btnCalcular.addEventListener('click', (e) => {
    const peso = txtPeso.value.replace(',','.');
    const altura = txtAltura.value.replace(',','.');
    const imc = calcularIMC(peso, altura);
    txtResultado.textContent = imc;
    txtNivel.innerText = indicarNivelIMC(imc);
});