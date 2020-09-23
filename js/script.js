
function sortear(){
   
   let nSorteados = document.getElementById('n').value
   const min = Number(document.querySelector('#min').value)
   const max = Number(document.querySelector('#max').value)
   const organizar = document.querySelector('#organizar').checked
   const resultado = document.querySelector('#valor')
   const resultados = []

   if (nSorteados <= 0){
      nSorteados = 1
   }

   if (nSorteados > max){
      alert(`Não é possivel sortear uma quantidade de números maior que o intervalo escolhido. O número de sorteios foi ajustado para o valor máximo do intervalo.`)
      nSorteados = max
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
      resultado.style.opacity = '100%'
      resultado.innerHTML = `O número escolhido foi:<br>${resultados}`
   }

   else{
      resultado.style.opacity = '100%'
      resultado.innerHTML = `Os números escolhidos foram:<br>${resultados}`
   }

}

function sorter(a, b) {
   if (a < b) return -1;
   if (a > b) return 1;
   return 0;
}