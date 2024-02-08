const perguntas = [
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Documento de Objeto Móvel",
        "Modelo de Objeto de Documento",
        "Documento de Objeto Manipulado",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "const",
        "var",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada no início de um programa",
        "Uma função que é passada como argumento para outra função e é executada após um evento ocorrer",
        "Uma função que é chamada quando um erro ocorre durante a execução do programa",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "concat()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Um tipo de dado em JavaScript",
        "Uma função que retorna um valor específico",
        "Uma ação que ocorre em um elemento HTML que pode ser manipulada com código JavaScript",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toFixed()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o operador ternário em JavaScript?",
      respostas: [
        "Um operador que atua sobre três operandos",
        "Um operador que compara três valores",
        "Um operador que transforma três valores em um único valor",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const  dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
  
        corretas.delete(item)
        if(estaCorreta){  
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }