const chalk = require('chalk');
const fs = require('fs');


function extraiLinks(texto) {

    /*
        Markdown sintaxe:
        [Texto do link](https://link.com/blabla)
    */
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];

    let ocorrencia;
    while ((ocorrencia = regex.exec(texto)) !== null) {
        arrayResultados.push({ [ocorrencia[1]] : ocorrencia[2] });
    }

    return arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.bgRed(erro));
}

async function abreArquivo(caminho) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);

        links = extraiLinks(texto);

        console.log(links);
    } catch (erro) {
        trataErro(erro);
    }
    
}

abreArquivo('./arquivos/texto.md');