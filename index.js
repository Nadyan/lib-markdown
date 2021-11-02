import chalk from 'chalk';
import fs from 'fs';


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

    if (arrayResultados.length === 0) {
        return 'Nenhum link encontrado';
    }
    return arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.bgRed(erro.code, 'arquivo não encontrado'));
}

export default async function abreArquivo(caminho) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding)
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}