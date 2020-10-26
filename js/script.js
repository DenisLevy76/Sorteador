
function sortear(){
   const nSorteadosHTML = document.getElementById('n')
   const min = Number(document.querySelector('#min').value)
   const max = Number(document.querySelector('#max').value)
   const organizar = document.querySelector('#organizar').checked
   const divResultado = document.querySelector('.resultado')
   var resultados = []
   
   let nSorteados = nSorteadosHTML.value


   if (nSorteados <= 0){
      nSorteadosHTML.value = '1'
      nSorteados = 1
   }

   if (min >= max){
      alert('Intervalo inválido')
      return 0
   }

   if (nSorteados <= 0){
      nSorteadosHTML.value = '1'
      nSorteados = 1
   }

   if (nSorteados > (max - min)){
      alert('Número de sorteios inválido')
      return 0
   }

   while (resultados.length < nSorteados){
      let numSorteado = Math.floor(Math.random() * (max - min + 1)) + min

      if (resultados.indexOf(numSorteado) == -1){
         resultados.push(numSorteado)
      }
   }

   if (organizar === true){
      resultados.sort(sorter)
   }

   
   if (resultados.length == 1){
      divResultado.innerHTML = `O número sorteado foi:<br>${resultados}`
   }
   
   else{
      divResultado.innerHTML = `Os números sorteados foram:<br>`
      
      for (index in resultados){
         if((Number(index) + 1) < resultados.length){
            divResultado.innerHTML += `${resultados[index]}, `
         }
         
         else{
            divResultado.innerHTML += `${resultados[index]}.`
         }
      }
   }
   
   divResultado.style.opacity = '100%'
}

function sorter(a, b) {
   if (a < b) return -1;
   if (a > b) return 1;
   return 0;
}