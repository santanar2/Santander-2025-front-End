const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArqivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error) 
    } finally  {
        console.log('finalizou!')
    }

}

buscarArquivo()

/* Função Principal
A função buscarArquivo() é assíncrona e:

Tenta ler o arquivo 'tarefas.csv'
Converte o conteúdo para texto UTF-8
Imprime o conteúdo no console
Estrutura try/catch/finally
try: Tenta ler e processar o arquivo
catch: Captura e mostra erros se ocorrerem
finally: Sempre executa, mostrando "finalizou!" */