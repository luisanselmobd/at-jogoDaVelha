function jogar(x){
  let preenchimento = false;
  let casaVazia = verificarPreenchimento(x);
  if(casaVazia == true) {
    preenchimento = preencher(x);
  } 
  let ganhou = verificarVitoria(x);
  if(ganhou != true) {
    let empatou = verificarEmpate();
    if(empatou == true) {
      informar("empate");
    } else if(preenchimento == true) mudarJogador();
  }
  else informar("vitoria"); 
  console.log("asd");
}

function iniciarTempo() {
    if (contadorTempo == 0) {
    contador++;
    var relogio=setInterval(contarHora,1000);
  }
  contadorTempo++;
}

function verificarPreenchimento(x) {
  if(jogadorVencedor.textContent == "" && casas[x].textContent == "") return true;
  else return false;
}

function preencher(x) {
  casas[x].textContent = jogadorForma.textContent;
  jogadas++;
  return true;
}

function verificarEmpate() {
  let preenchido = true
  for(i=0; i<casas.length; i++) {
    if(casas[i].textContent == "") {
      preenchido = false;
      break;
    }
  }
  if(preenchido == true) return true;
}

function verificarVitoria() {
  let ganhouLinha = verificarVitoriaLinha();
  let ganhouColuna = verificarVitoriaColuna();
  let ganhouDiagonal = verificarVitoriaDiagonal();
  if(ganhouLinha == true || ganhouColuna == true || ganhouDiagonal == true) return true;
}

function zerarCasas() {
  var casa1 = "";
  var casa2 = "";
  var casa3 = "";
  var valor1 = "";
  var valor2 = "";
  var valor3 = "";
}

function verificarVitoriaLinha() {
let linhaUm = retornarValoresCasas(0,1,2);
let linhaDois = retornarValoresCasas(3,4,5);
let linhaTres = retornarValoresCasas(6,7,8);
if(linhaUm == "X,X,X" || linhaUm == "O,O,O") {
  pintar(0, 1, 2);
  return true;
} else if(linhaDois == "X,X,X" || linhaDois == "O,O,O") {
    pintar(3, 4, 5);
    return true;
} else if(linhaTres == "X,X,X" || linhaTres == "O,O,O") {
    pintar(6, 7, 8);
    return true;
} else {
  return false;
}

} 

function retornarValoresCasas(a, b, c) {
  let array = [casas[a].textContent, casas[b].textContent, casas[c].textContent]
  return array.join();
}

function verificarVitoriaColuna() {
  let colunaUm = retornarValoresCasas(0,3,6);
  let colunaDois = retornarValoresCasas(1,4,7);
  let colunaTres = retornarValoresCasas(2,5,8);
  if(colunaUm == "X,X,X" || colunaUm == "O,O,O") {
    pintar(0, 3, 6);
    return true;
  } else if(colunaDois == "X,X,X" || colunaDois == "O,O,O") {
      pintar(1, 4, 7);
      return true;
  } else if(colunaTres == "X,X,X" || colunaTres == "O,O,O") {
      pintar(2, 5, 8);
      return true;
  } else {
    return false;
  }
} 

function verificarVitoriaDiagonal() {
let diagonalUm = retornarValoresCasas(0,4,8);
let diagonalDois = retornarValoresCasas(2,4,6);
if(diagonalUm == "X,X,X" || diagonalUm == "O,O,O") {
  pintar(0, 4, 8);
  return true;
} else if(diagonalDois == "X,X,X" || diagonalDois == "O,O,O") {
    pintar(2, 4, 6);
    return true;
} else {
  return false;
}
}

function pintar(x, y, z) {
  casas[x].style.backgroundColor = "#03fc94";
  casas[y].style.backgroundColor = "#03fc94";
  casas[z].style.backgroundColor = "#03fc94";
}

function mudarJogador() {
  if(jogadorForma.textContent == "X") jogadorForma.textContent = "O";
  else jogadorForma.textContent = "X";
}

function informar(mensagem) {
  tabuleiro.style.gridColumn = "tabuleiro";
  mensagens.style.display = "inline-block";
  if(mensagem == "vitoria") {
    coletarHora = true;
  }
  contarHora("parar");
  if(mensagem == "vitoria") {
    informarVitoria()
  } else {
    informarEmpate()
  }
}

function informarVitoria() {
      jogadorVencedor.textContent = `Quem estava marcando ${jogadorForma.textContent} venceu!`;
    if(jogadorForma.textContent == "X") alterarPlacar("x");
    else alterarPlacar("o");
    exibirTempos(jogadorForma.textContent);
}

function informarEmpate() {
   jogadorVencedor.textContent = `Houve um empate!`;
    alterarPlacar("e");
    for(i=0; i<casas.length; i++) {
    casas[i].style.backgroundColor = "#fa7d7d";
    tabuleiro.style.backgroundColor = "#FFFFFF";
    tabuleiro.style.borderColor = "#FFFFFF";
  }
}

function alterarPlacar(mensagem) {
  if(mensagem == "x") {
    if(jogadas<=8) xPlacar = xPlacar + 2;
    else xPlacar++;
    placarX.textContent = xPlacar;
  } else if(mensagem == "o") {
    if(jogadas<=8) oPlacar = oPlacar + 2;
    else oPlacar++;
    placarO.textContent = oPlacar;
  }
  else {
    empatePlacar++;
    placarEmpate.textContent = empatePlacar;
  }
}

function descolorirCasas() {
    for(i=0; i<casas.length; i++) {
    casas[i].style.removeProperty("background-color");
    casas[i].textContent = "";
  }
}

function zerar() {
  xPlacar = 0;
  oPlacar = 0;
  empatePlacar = 0;
  placarX.textContent = 0;
  placarO.textContent = 0;
  placarEmpate.textContent = 0;
  jogadas = 0;
}

function resetar() {
  tabuleiro.style.gridColumn = "tabuleiro / mensagens";
  mensagens.style.display = "none";
  jogadorVencedor.textContent = "";
  descolorirCasas();
  tabuleiro.style.removeProperty("background-color");
  tabuleiro.style.removeProperty("border-color");
  jogadorForma.textContent = "X";
  zerar();
  resetarHora();
  tempos = [];
  recorde.style.display = "none";
} 

function jogarNovamente() {
    tabuleiro.style.gridColumn = "tabuleiro / mensagens";
  mensagens.style.display = "none";
  jogadorVencedor.textContent = "";
  for(i=0; i<casas.length; i++) {
    casas[i].style.removeProperty("background-color");
    casas[i].textContent = "";
  }
  tabuleiro.style.removeProperty("background-color");
  tabuleiro.style.removeProperty("border-color");
  mudarJogador();
  jogadas = 0;
  resetarHora();
}

function exibirTempos(mensagem) {
  let melhorTempo = tempos.sort()[tempos.length-1];
  let vencedorMelhorTempo = mensagem;
  msgRecorde.textContent = `${melhorTempo} (${vencedorMelhorTempo})`;
  recorde.style.display = "initial";
}

function resetarHora() {
  parar = true;
  contador = 0;
  minutosTempo = 0;
  horasTempo = 0;
  clearInterval(relogio);
  segundos.textContent = "0" + contador;
  minutos.textContent = "0" + minutosTempo;
  hora.textContent = "0" + horasTempo;
  
}

function contarHora(mensagem) {
  if(mensagem == "parar") parar = true;
  if (parar != true)iniciarContagem();
  else {
    if(coletarHora == true) {
      let horario = `${hora.textContent}:${minutos.textContent}:${segundos.textContent}`;
      tempos.push(horario);
      coletarHora = false;
    }
  }
}

function  iniciarContagem() { 
    if(contador <= 59) {
      contarTempo(contador, segundos);
    } else {
      contador = 0;
      minutosTempo++;
      segundos.textContent = "0" + contador;
      if(minutosTempo<=59) {
        contarTempo(minutosTempo, minutos);
      } else {
        minutosTempo = 0;
        horasTempo++;
        minutos.textContent = "0" + minutosTempo;
        contarTempo(horasTempo, hora);
      }    
    }
    contador++;
  }

function contarTempo(tempoAModificar, tempoModificado) {
  if(contador<10) segundos.textContent = "0" + contador;
  else segundos.textContent = contador;
}





var casas = document.getElementsByClassName("casa");
var jogadorForma = document.getElementById("sJogadorDaVez");
var mensagens = document.getElementById("mensagens");
var tabuleiro = document.getElementById("tabuleiro");
var btJogar = document.getElementById("btJogar");
var btRecomecar = document.getElementById("btRecomecar");
var jogadorVencedor = document.getElementById("vencedor");
var placarX = document.getElementById("placarX");
var placarO = document.getElementById("placarO");
var placarEmpate = document.getElementById("placarEmpate");
var hora = document.getElementById("hora");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var msgRecorde = document.getElementById("msgRecorde");
var recorde = document.getElementById("recorde");
var xPlacar = 0;
var oPlacar = 0;
var empatePlacar = 0;
var pontuacaoExtra = 0;
var jogadas = 0;
var horasTempo = 0;
var minutosTempo = 0;
var contador = 0;
var parar = false;
var tempos = [];
var contadorTempo = 0;
var coletarHora = false;
btRecomecar.addEventListener("click", resetar);
btJogar.addEventListener("click", jogarNovamente);
  var casa1 = "";
  var casa2 = "";
  var casa3 = "";
  var valor1 = "";
  var valor2 = "";
  var valor3 = "";

casas[0].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(0);
});
casas[1].addEventListener("click", function() {
  iniciarTempo();  
  parar = false;
  jogar(1);
});
casas[2].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(2);
});
casas[3].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(3);
});
casas[4].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(4);
});
casas[5].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(5);
});
casas[6].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(6);
});
casas[7].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(7);
});
casas[8].addEventListener("click", function() {
  iniciarTempo();
  parar = false;
  jogar(8);
});
