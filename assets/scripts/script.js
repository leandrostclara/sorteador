const drawBtn = document.querySelector(".draw-btn")


function sortearNumero() {
  
    const imgSorteio = document.querySelector(".img-sorteio")
    const containerNumero = document.querySelector(".numero-sorteado-container")
    const numeroSorteado = document.querySelector(".numero-sorteado")

    const min = Math.ceil(document.querySelector("#numero-inicial").value)
    const max = Math.floor(document.querySelector("#numero-limite").value)
    
    const result = Math.floor(Math.random() * (max - min + 1) + min)
   
    if (max > min) {

        containerNumero.style.display=("block")
        numeroSorteado.innerHTML = result

    } else {

        alert ("O numero maximo não pode ser menor que o mínimo !")

    }

}

drawBtn.addEventListener("click", sortearNumero)