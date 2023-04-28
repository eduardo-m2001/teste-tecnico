// 1) Observe o trecho de código abaixo:

  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }


console.log(SOMA);  // O resultado impresso no console será: 91.






/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
       (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
         informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */


  const num = parseInt(prompt("Informe um número inteiro: "));

  let numA = 0;
  let numB = 1;
  let numC = numA + numB;

  while (numC <= num) {
    if (numC === num) {
      console.log(`${num} pertence à sequência de Fibonacci.`);
      break;
    }
    numA = numB;
    numB = numC;
    numC = numA + numB;
  }

  if (numC > num) {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }






// 3) Descubra a lógica e complete o próximo elemento:

  // a) 1, 3, 5, 7, ___
  let a = [1, 3, 5, 7];
  a.push(a[a.length - 1] + 2);
  console.log(a); // [1, 3, 5, 7, 9]

  // b) 2, 4, 8, 16, 32, 64, ____
  let b = [2, 4, 8, 16, 32, 64];
  b.push(b[b.length - 1] * 2);
  console.log(b); // [2, 4, 8, 16, 32, 64, 128]

  // c) 0, 1, 4, 9, 16, 25, 36, ____
  let c = [0, 1, 4, 9, 16, 25, 36];
  c.push(Math.pow(c.length, 2) + (2 * c.length) + 1);
  console.log(c); // [0, 1, 4, 9, 16, 25, 36, 49]

  // d) 4, 16, 36, 64, ____
  let d = [4, 16, 36, 64];
  d.push(Math.pow(d.length * 2, 2));
  console.log(d); // [4, 16, 36, 64, 100]

  // e) 1, 1, 2, 3, 5, 8, ____
  let e = [1, 1, 2, 3, 5, 8];
  e.push(e[e.length - 1] + e[e.length - 2]);
  console.log(e); // [1, 1, 2, 3, 5, 8, 13]

  // f) 2,10, 12, 16, 17, 18, 19, ____
  let f = [2, 10, 12, 16, 17, 18, 19];
  f.push(f[f.length - 1] + 1);
  console.log(f); // [2, 10, 12, 16, 17, 18, 19, 20]








/* 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia.
       O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h.
        Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto? */

    const distanciaTotal = 100; // em km
    const velocidadeCarro = 110; // em km/h
    const velocidadeCaminhao = 80; // em km/h
    const tempoPedagio = 5; // em minutos
    const distanciaPedagio1 = 30; // em km
    const distanciaPedagio2 = 70; // em km
    
    // Convertendo o tempo do pedágio de minutos para horas
    const tempoPedagioHoras = tempoPedagio / 60;
    
    // Calculando o tempo e a distância que o caminhão percorre até o primeiro pedágio
    const tempoAtePedagio1Caminhao = (distanciaPedagio1 / velocidadeCaminhao) + tempoPedagioHoras;
    const distanciaAtePedagio1Caminhao = distanciaPedagio1;
    
    // Calculando o tempo e a distância que o carro percorre até o segundo pedágio
    const tempoAtePedagio2Carro = (distanciaPedagio2 / velocidadeCarro);
    const distanciaAtePedagio2Carro = distanciaTotal - distanciaPedagio2;
    
    // Calculando o tempo e a distância que o caminhão percorre até o segundo pedágio
    const tempoAtePedagio2Caminhao = (distanciaAtePedagio1Caminhao + (distanciaAtePedagio2Carro - distanciaAtePedagio1Caminhao) / 2) / velocidadeCaminhao + tempoPedagioHoras;
    const distanciaAtePedagio2Caminhao = distanciaTotal - distanciaPedagio1 - distanciaAtePedagio2Carro;
    
    // Calculando o tempo total de viagem de cada veículo
    const tempoTotalCarro = (distanciaTotal / velocidadeCarro);
    const tempoTotalCaminhao = (distanciaAtePedagio1Caminhao + tempoAtePedagio2Caminhao + distanciaAtePedagio2Caminhao) / velocidadeCaminhao;
    
    // Calculando a distância percorrida por cada veículo até o ponto de encontro
    const distanciaEncontroCarro = velocidadeCarro * tempoTotalCaminhao;
    const distanciaEncontroCaminhao = distanciaTotal - distanciaEncontroCarro;
    
    // Verificando qual veículo está mais próximo de Ribeirão Preto
    if (distanciaEncontroCarro < distanciaEncontroCaminhao) {
      console.log('O carro está mais próximo de Ribeirão Preto');
    } else if (distanciaEncontroCaminhao < distanciaEncontroCarro) {
      console.log('O caminhão está mais próximo de Ribeirão Preto');
    } else {
      console.log('O carro e o caminhão estão na mesma distância de Ribeirão Preto');
    }






/*
5) Escreva um programa que inverta os caracteres de um string.
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; 
*/ 

  let str = "exemplo"; // a string a ser invertida
  let strInvertida = "";

  // percorre a string de trás para frente, adicionando cada caractere em uma nova string
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  console.log(strInvertida); // imprime a string invertida
