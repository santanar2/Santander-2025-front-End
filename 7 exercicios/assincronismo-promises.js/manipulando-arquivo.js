const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// Definir a promessa que estava faltando
const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

promesaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return{
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu ruin!', error))

    /* Fluxo de Operações
Leitura do Arquivo

Lê um arquivo CSV chamado 'tarefas.csv'
Usa fs.promises.readFile para leitura assíncrona
Transformação dos Dados

Converte o buffer para string (UTF-8)
Remove a primeira linha (cabeçalho)
Converte cada linha em um objeto de tarefa*/  