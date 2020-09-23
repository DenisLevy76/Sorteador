
function sortear(){
   
   let nSorteadosHTML = document.getElementById('n')
   let nSorteados = nSorteadosHTML.value
   
   const min = Number(document.querySelector('#min').value)
   const max = Number(document.querySelector('#max').value)
   const organizar = document.querySelector('#organizar').checked
   const divResultado = document.querySelector('.resultado')

   const resultados = []

   if (nSorteados <= 0){
      nSorteadosHTML.value = '1'
      nSorteados = 1
   }

   if (min >= max){
      alert('Intervalo inválido')
      return 0
   }


   if (nSorteados <= 0){
      nSorteadosHTML = '1'
      nSorteados = 1
   }

   if (nSorteados > (max - min)){
      nSorteadosHTML.value = `${max - min}`
      nSorteados = max - min
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
      divResultado.style.opacity = '100%'
      divResultado.innerHTML = `O número escolhido foi:${resultados}`
   }

   else{
      divResultado.style.opacity = '100%'
      divResultado.innerHTML = `Os números escolhidos foram:<br>`

      for (index in resultados){

         if((Number(index) + 1) < resultados.length){
            divResultado.innerHTML += `${resultados[index]}, `
            console.log(1, index, resultados.length);
         }

         else{
            divResultado.innerHTML += `${resultados[index]}`
            console.log(2, index, resultados.length);
         }
      
      }

   }

}

function sorter(a, b) {
   if (a < b) return -1;
   if (a > b) return 1;
   return 0;
}