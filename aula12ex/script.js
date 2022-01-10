function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
function carregar() {
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var data = new Date();
var minuto = data.getMinutes();
var hora = data.getHours();
var minuto = addZero(data.getMinutes());
msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 12) {
      //BOM DIA
       imagem.src = "img/manha.png";
       //document.getElementById('imagem');
       document.body.style.background = '#998877';
    } else if (hora >= 12 && hora <= 18) {
      //BOA TARDE
      imagem.src = "img/tarde.png";
      //document.getElementById('imagem');
      document.body.style.background = '#6d2ce67c';
    } else {
      //BOA NOITE
      imagem.src = "img/noite.png";
      //document.getElementById('imagem').scr = 'img/noite.png';
      document.body.style.background = '#171A1B';
      //document.body.style.color = '#ffffff';
    }
}

