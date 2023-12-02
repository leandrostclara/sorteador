const drawBtn = document.querySelector(".draw-btn")


function sortearNumero() {
  
    const containerNumero = document.querySelector(".numero-sorteado-container")
    const numeroSorteado = document.querySelector(".numero-sorteado")

    const min = Math.ceil(document.querySelector("#numero-inicial").value)
    const max = Math.floor(document.querySelector("#numero-limite").value)
    
    const result = Math.floor(Math.random() * (max - min + 1) + min)
   
    if (max > min) {
      
        setTimeout(function() {

            containerNumero.style.display=("block")
            numeroSorteado.style.fontSize=("30px")
            numeroSorteado.innerHTML = "SORTEANDO"

        },1000)
        setTimeout(function() {

            numeroSorteado.innerHTML = "SORTEANDO."

        },2000)
        setTimeout(function() {

            numeroSorteado.innerHTML = "SORTEANDO.."

        },3000)
        setTimeout(function() {

            numeroSorteado.innerHTML = "SORTEANDO..."

        },4000)
        setTimeout(function() {

            numeroSorteado.style.fontSize=("50px")
            numeroSorteado.innerHTML = result

        },5000)


    } else {

        alert ("O numero maximo não pode ser menor que o mínimo !")

    }

}

drawBtn.addEventListener("click", sortearNumero)