// interface de linha de comando
//
// Modo de uso:
// npm run cli

const chalk = require('chalk');
const abreArquivo = require('./index');

async function processa(caminhoArquivo) {
    const resultado = await abreArquivo(caminhoArquivo);
    console.log(resultado);
}

const arquivo = process.argv[2];
processa(arquivo);