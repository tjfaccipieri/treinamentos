// Construção básica de AJAX puro

// const xhr = new XMLHttpRequest;

// xhr.open('GET', 'https://api.github.com/users/tjfaccipieri', true);
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// }

// ************************************************* //

// Inserindo uso de PROMISSES

const firstPromisse = function(){
  return new Promise(function(resolve, reject){
  const xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://api.github.com/users/tjfaccipieri', true);
  xhr.send(null);

  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if(xhr.status  === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject('Erro de request');
      }
    }
  }

  });
}
// promisse serve para aguardar as requisições de forma assincrona antes de executar determinadas partes do código, que são colocadas no .then
firstPromisse()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });