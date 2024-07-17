const cifra = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
}

function criptografar() {
  texto = document.getElementById('texto').value.toLowerCase()
  let textoCodigo = texto

  for (key in cifra) {
    if (texto.includes(key)) {
      textoCodigo = textoCodigo.replaceAll(key, cifra[key])
    }
  }
  let result = document.getElementById('saida')
  document.getElementById('imagem').style.display = 'none'
  let element = document.getElementById('saida')
  element.style.margin = '10px 10px 510px 10px'
  result.innerText = textoCodigo
}

function descriptografar() {
  console.log('aqui')
  texto = document.getElementById('texto').value.toLowerCase()
  let textoCodigo = texto

  for (key in cifra) {
    if (texto.includes(cifra[key])) {
      textoCodigo = textoCodigo.replaceAll(cifra[key], key)
    }
  }
  let result = document.getElementById('saida')
  document.getElementById('imagem').style.display = 'none'
  result.innerText = textoCodigo
}

function copiarConteudo() {
  let newClip = document.getElementById('saida').innerText
  alert('texto foi copiado para área de transferencia')
  navigator.clipboard.writeText(newClip).then(
    () => {
      console.log('ok')
    },
    () => {
      console.log('erro')
    }
  )
}
