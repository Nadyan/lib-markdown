import fetch from 'node-fetch';

export default async function validaURLs(arrayChaveValor) {
    // pega apenas os valores do { chave: valor }
    // Object.values retorna uma lista para cada loop, entao usamos o 
    // join para fazer apenas uma lista de strings
    const arrayLinks = arrayChaveValor.map(obj => Object.values(obj).join());

    const statusLinks = await checaStatus(arrayLinks);
    
    return statusLinks;
}

async function checaStatus(arrayURLs) {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url);
        return res.status;
    }));

    return arrayStatus;
}