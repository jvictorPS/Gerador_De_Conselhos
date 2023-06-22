async function pegarConselho() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()

        const idConselho = data.slip.id
        const textoConselho = data.slip.advice

        return {idConselho , textoConselho}

  } catch (error) {
    console.error('Erro:', error)
  }
}

const botao = document.getElementById("buscar")
const conselhoTexto = document.querySelector('#texto-conselho')
const conselhoID = document.querySelector('#id-conselho')

botao.addEventListener('click' , async () => {
    try {
        const resultado = await pegarConselho()
    
        conselhoID.innerText = `A D I V I C E   #  ${resultado.idConselho}`
        conselhoTexto.innerText = `"${resultado.textoConselho}"`

      } catch (error) {
        console.error('Erro:', error)
      }
})