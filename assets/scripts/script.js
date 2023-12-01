const drawBtn = document.querySelector(".draw-btn")


function sortearNumero() {
  
    const containerNumero = document.querySelector(".numero-sorteado-container")
    const numeroSorteado = document.querySelector(".numero-sorteado")

    const min = Math.ceil(document.querySelector("#numero-inicial").value)
    const max = Math.floor(document.querySelector("#numero-limite").value)
    
    const result = Math.floor(Math.random() * (max - min + 1) + min)
   
    containerNumero.style.display=("block")
    numeroSorteado.innerHTML = result

}

drawBtn.addEventListener("click", sortearNumero)