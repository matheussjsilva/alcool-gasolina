const alc = document.querySelector("#alcool");
const gas = document.querySelector("#gasolina");
const btnCalcular = document.getElementById("btn-calc");
const resCalc = document.querySelector(".res");
const crossForm = document.querySelector(".close");
const tableForm = document.querySelector(".formula");

let resultado = 0;

function calcular(e) {
  e.preventDefault();
  resultado = (alc.value / gas.value) * 100;
  console.log(resultado.toFixed(1));
  if (resultado <= 70) {
    resCalc.textContent = `Recomendavel Alcool`;
  } else {
    resCalc.textContent = `Recomendavel Gasolina`;
  }
}

function closeForm() {
  tableForm.classList.add("hide");
  setTimeout(() => {
    tableForm.classList.remove("hide");
  }, 5000);
}

btnCalcular.addEventListener("click", calcular);

crossForm.addEventListener("click", closeForm);
