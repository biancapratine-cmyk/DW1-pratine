let pontosA = 0;
let pontosB = 0;

function alterarPontos(time, valor) {
  if (time === 'A') {
    pontosA = Math.max(0, pontosA + valor);
  } else {
    pontosB = Math.max(0, pontosB + valor);
  }
  atualizarTela();
  verificarVencedor();
}

function atualizarTela() {
  document.getElementById('pontosA').innerText = pontosA;
  document.getElementById('pontosB').innerText = pontosB;
}

function resetar() {
  pontosA = 0;
  pontosB = 0;
  document.getElementById('vencedor').innerText = "";
  atualizarTela();
}

function trocarLados() {
  let tempNome = document.getElementById('nomeA').value;
  document.getElementById('nomeA').value = document.getElementById('nomeB').value;
  document.getElementById('nomeB').value = tempNome;

  let tempPontos = pontosA;
  pontosA = pontosB;
  pontosB = tempPontos;

  atualizarTela();
}

function verificarVencedor() {
  let limite = parseInt(document.getElementById('limite').value);
  let nomeA = document.getElementById('nomeA').value;
  let nomeB = document.getElementById('nomeB').value;

  if (pontosA >= limite && pontosA - pontosB >= 2) {
    document.getElementById('vencedor').innerText = `🏆 ${nomeA} venceu!`;
  } else if (pontosB >= limite && pontosB - pontosA >= 2) {
    document.getElementById('vencedor').innerText = `🏆 ${nomeB} venceu!`;
  } else {
    document.getElementById('vencedor').innerText = "";
  }
}