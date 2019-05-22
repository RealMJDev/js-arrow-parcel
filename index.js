import calcVat from './helpers/calcVat'

const app = document.getElementById('app');

app.innerText = calcVat(5000);