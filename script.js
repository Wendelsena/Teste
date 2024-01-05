document.getElementById('botaoTrocarTexto').addEventListener('click', function() {
    var paragrafo = document.getElementById('paragrafoTexto');
    if (paragrafo.textContent === 'Texto alterado! Clique novamente para reverter.') {
      paragrafo.textContent = 'Este é um texto inicial.';
    } else {
      paragrafo.textContent = 'Texto alterado! Clique novamente para reverter.';
    }
  });
  