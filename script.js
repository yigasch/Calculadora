//mudança de tema
const radios = document.querySelectorAll('input[type="radio"]');
const body = document.body;
const botaocalculadora = document.querySelectorAll(".botao-calculadora");
const tela = document.querySelectorAll(".tela")
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const theme = radio.value;

    if (theme === 'dark') {
      body.classList.add('dark');
      body.classList.remove('light');
      for (const el of botaocalculadora) {
        el.classList.add('dark');
        el.classList.remove('light');
      }
      for (const el of tela) {
        el.classList.add('dark');
        el.classList.remove('light');
      }
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
      for (const el of botaocalculadora) {
        el.classList.add('light');
        el.classList.remove('dark');
      }
      for (const el of tela) {
        el.classList.add('light');
        el.classList.remove('dark');
      }
      localStorage.setItem('theme', 'light');
    }
  });
});
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
  body.classList.add('dark');
  for (const el of botaocalculadora) {
    el.classList.add('dark');
  }
  for (const el of tela) {
    el.classList.add('dark');
  }
  radios[1].checked = true;
} else {
  body.classList.add('light');
  for (const el of botaocalculadora) {
    el.classList.add('light');
  }
  for (const el of tela) {
    el.classList.add('light');
  }
  radios[0].checked = true;
}

//calculadora

const telas = document.getElementById('tela'); // seleciona a tela da calculadora

function adicionarNumero(num) {
  telas.innerText += num;
}

document.getElementById('N0').addEventListener('click', function () {
  adicionarNumero('0');
});

document.getElementById('N1').addEventListener('click', function () {
  adicionarNumero('1');
});

document.getElementById('N2').addEventListener('click', function () {
  adicionarNumero('2');
});

document.getElementById('N3').addEventListener('click', function () {
  adicionarNumero('3');
});

document.getElementById('N4').addEventListener('click', function () {
  adicionarNumero('4');
});

document.getElementById('N5').addEventListener('click', function () {
  adicionarNumero('5');
});

document.getElementById('N6').addEventListener('click', function () {
  adicionarNumero('6');
});

document.getElementById('N7').addEventListener('click', function () {
  adicionarNumero('7');
});

document.getElementById('N8').addEventListener('click', function () {
  adicionarNumero('8');
});

document.getElementById('N9').addEventListener('click', function () {
  adicionarNumero('9');
});

const deleteAllButton = document.getElementById("deleteall");

deleteAllButton.addEventListener("click", function () {
  telas.innerHTML = "";
});

document.getElementById("delete").addEventListener("click", function () {
  let conteudo = telas.innerHTML;
  telas.innerHTML = conteudo.substring(0, conteudo.length - 1);
});

document.getElementById("p_esquerdo").addEventListener("click",function () {
    telas.innerHTML += "("
});
document.getElementById("p_direito").addEventListener("click",function () {
  telas.innerHTML += ")"
});

function insert (num){
  let numero = document.getElementById('tela').innerHTML;
  document.getElementById('tela').innerHTML = numero+num;
}

function calcular(){
  var resultado = document.getElementById('tela').innerHTML;
  if(resultado){
    document.getElementById('tela').innerHTML = eval(resultado);
  }
}

function raiz(){
  var raiz = document.getElementById('tela').innerHTML;
  if(raiz){
    document.getElementById('tela').innerHTML = Math.sqrt(raiz);
  } else{
    document.getElementById('tela').innerHTML = "";
  }
}

function potencia(){ 
  potencia = document.getElementById('tela').innerHTML;
  if(potencia){
    document.getElementById('tela').innerHTML = potencia*potencia;
  } else{
    document.getElementById('tela').innerHTML = "";
  }
}

function porcentagem(){
  porcentagem = document.getElementById('tela').innerHTML;
  if(potencia){
    document.getElementById('tela').innerHTML = porcentagem/100;
  } else{
    document.getElementById('tela').innerHTML = "";
  }
}

function historico() {
  var elementoparagrafo = document.createElement("p");
  elementoparagrafo.innerHTML = document.getElementById("tela").value;
  var div = document.getElementById("div-historico");
  div.appendChild(elementoparagrafo);
}
