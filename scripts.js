const buttonRaffle = document.getElementById('draw');
const resultEl = document.getElementById('result');

const numberEl = document.getElementById('number');
const closeEl = document.getElementById('close');
const inputMin = document.getElementById('between');
const inputMax = document.getElementById('and');

function raffleNumber() {
    const min = Math.ceil(inputMin.value);
    const max = Math.floor(inputMax.value);

    resultEl.style.display = 'flex';
    resultEl.classList.remove('error', 'animate');

    if (isNaN(min) || isNaN(max) || min >= max) {
        numberEl.textContent = "Digite valores válidos!";
        resultEl.classList.add('error');
        return;
    }

    let count = 0;
    const interval = setInterval(() => {
        const temp = Math.floor(Math.random() * (max - min + 1)) + min;
        numberEl.textContent = temp;
        count++;

        if (count >= 15) {
            clearInterval(interval);
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            numberEl.textContent = result;
            resultEl.classList.add('animate');
            setTimeout(() => resultEl.classList.remove('animate'), 600);
        }
    }, 70);
}

closeEl.addEventListener('click', () => {
    numberEl.textContent = '';
    resultEl.style.display = 'none';
    resultEl.classList.remove('error', 'animate');

    inputMin.value = '';
    inputMax.value = '';
});



buttonRaffle.addEventListener('click', raffleNumber);
