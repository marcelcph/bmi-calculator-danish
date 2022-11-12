const vaegtInput = document.getElementById('vaegt');
const hoejdeInput = document.getElementById('hoejde');
const resultElement = document.getElementById('result');
const bmiElement = document.getElementById('bmi');
const statusElement = document.getElementById('status');

const showResults = () => {
    resultElement.style.display = 'block';
}

const hideResults = () => {
    resultElement.style.display = 'none';
}

hideResults();

const calculateBMI = () => {
    const vaegt = vaegtInput.value;
    const hoejde = hoejdeInput.value;
    if(vaegt && hoejde){
        const bmi = (vaegt) / (hoejde * hoejde);

        if(isNaN(bmi)) {
            hideResults();
            return;
        }

        bmiElement.innerText = bmi.toFixed(2);


        if (bmi < 18.5) {
            statusElement.innerText = 'Undervægtig';
        } else if (bmi < 25) {
            statusElement.innerText = 'Normal';
        } else if (bmi < 30) {
            statusElement.innerText = 'Overvægtig';
        } else {
            statusElement.innerText = 'Fedme';
        }

        showResults();2
    } else {
        bmiElement.innerHTML = '';
        statusElement.innerHTML = '';
        hideResults();
    }
}

hoejdeInput.addEventListener('input', calculateBMI);
vaegtInput.addEventListener('input', calculateBMI);