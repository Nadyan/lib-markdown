// interface de linha de comando
//
// Modo de uso:
// npm run cli

import chalk from 'chalk';
import abreArquivo from './index.js';
import validaURLs from './http-validacao.js';

async function processa(caminhoArquivo) {
    const resultado = await abreArquivo(caminhoArquivo[2]);
    if (resultado !== []) {
        if (caminhoArquivo[3] === '-validar') {
            console.log(chalk.bgBlue('Status:'), await validaURLs(resultado));
        } else {
            console.log(chalk.bgBlue('Links encontrados:'), resultado);
        }
    } else {
        console.log(chalk.bgRed('Nenhum link encontrado'));
    }   
}

processa(process.argv);