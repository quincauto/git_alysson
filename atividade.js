1_Array de numero aleatorio

function gerarArrayAleatorio(tamanho, valorMinimo, valorMaximo) {
  const array = [];
  for (let i = 0; i < tamanho; i++) {
      const valor = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
      array.push(valor);
  }
  return array;
}

console.log(gerarArrayAleatorio(5, 1, 10));

2_ Elementos mias frequentes 
function elementoMaisFrequente(arrar) {
  if (arrar.length === 0) {
      console.log("Não há elemento mais frequente");
      return;
  }

  const frequencias = {};
  let maxFrequencia = 0;
  let elementoMaisFrequente = null;

  for (let i = 0; i < arrar.length; i++) {
      const elemento = arrar[i];
      frequencias[elemento] = (frequencias[elemento] || 0) + 1;
      
      if (frequencias[elemento] > maxFrequencia) {
          maxFrequencia = frequencias[elemento];
          elementoMaisFrequente = elemento;
      }
  }

  const frequenciasDoElementoMaisFrequente = Object.values(frequencias).filter(f => f === maxFrequencia).length;

  if (frequenciasDoElementoMaisFrequente === 1) {
      console.log(elementoMaisFrequente);
  } else {
      console.log("Não há elemento mais frequente");
  }
}
elementoMaisFrequente([1, 2, 2, 3, 3, 3]);

3_ Remoção de elementos repetidos
function removerRepetidos(arrar) {
  const frequencias = {};
  const resultado = [];

  for (const elemento of arrar) {
      frequencias[elemento] = (frequencias[elemento] || 0) + 1;
  }

  for (const elemento of arrar) {
      if (frequencias[elemento] === 1) {
          resultado.push(elemento);
      }
  }

  if (resultado.length === arrar.length) {
      console.log("Não há elementos repetidos");
  } else {
      console.log(resultado);
  }
}

// Teste
removerRepetidos([1, 2, 2, 3, 4, 4, 5]);

4_concatenar a arrays
function concatenarArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Teste
console.log(concatenarArrays([1, 2, 3], [4, 5, 6]));

5_ Junçao das funçoes
function gerarArrayAleatorio(tamanho, valorMinimo, valorMaximo) {
  const array = [];
  for (let i = 0; i < tamanho; i++) {
      const valor = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
      array.push(valor);
  }
  return array;
}

function elementoMaisFrequente(arrar) {
  if (arrar.length === 0) {
      return "Não há elemento mais frequente";
  }

  const frequencias = {};
  let maxFrequencia = 0;
  let elementoMaisFrequente = null;

  for (let i = 0; i < arrar.length; i++) {
      const elemento = arrar[i];
      frequencias[elemento] = (frequencias[elemento] || 0) + 1;
      
      if (frequencias[elemento] > maxFrequencia) {
          maxFrequencia = frequencias[elemento];
          elementoMaisFrequente = elemento;
      }
  }

  const frequenciasDoElementoMaisFrequente = Object.values(frequencias).filter(f => f === maxFrequencia).length;

  return frequenciasDoElementoMaisFrequente === 1 ? elementoMaisFrequente : "Não há elemento mais frequente";
}

function removerRepetidos(arrar) {
  const frequencias = {};
  const resultado = [];

  for (const elemento of arrar) {
      frequencias[elemento] = (frequencias[elemento] || 0) + 1;
  }

  for (const elemento of arrar) {
      if (frequencias[elemento] === 1) {
          resultado.push(elemento);
      }
  }

  return resultado.length === arrar.length ? null : resultado;
}

function concatenarArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function main() {
  const arrayAleatorio = gerarArrayAleatorio(10, 1, 10);
  console.log("-----------------------------------");
  console.log("Passando pela função do Exercício 1");
  console.log("Entrada: array " + JSON.stringify(arrayAleatorio));
  
  const arrayMaisFrequente = elementoMaisFrequente(arrayAleatorio);
  console.log("Saída: " + arrayMaisFrequente);
  console.log("-----------------------------------");

  const arraySemRepetidos = removerRepetidos(arrayAleatorio);
  console.log("-----------------------------------");
  console.log("Passando pela função do Exercício 3");
  console.log("Entrada: array " + JSON.stringify(arrayAleatorio));
  console.log("Saída: array " + (arraySemRepetidos ? JSON.stringify(arraySemRepetidos) : "Não há elementos repetidos"));
  console.log("-----------------------------------");

  const arrayConcatenado = concatenarArrays(arrayAleatorio, [100, 200, 300]);
  console.log("-----------------------------------");
  console.log("Passando pela função do Exercício 4");
  console.log("Entrada: array " + JSON.stringify(arrayAleatorio) + " e array [100, 200, 300]");
  console.log("Saída: array " + JSON.stringify(arrayConcatenado));
  console.log("-----------------------------------");
}

main();

