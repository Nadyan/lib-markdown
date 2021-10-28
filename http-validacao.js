import fetch from 'node-fetch';

function handleError(err) {
    throw new Error(err.message);
}

export default async function validaURLs(arrayChaveValor) {
    // pega apenas os valores do { chave: valor }
    // Object.values retorna uma lista para cada loop, entao usamos o 
    // join para fazer apenas uma lista de strings
    const arrayLinks = arrayChaveValor.map(obj => Object.values(obj).join());
    const statusLinks = await checaStatus(arrayLinks);
    
    // retorna um objeto com o contudo do objeto dos links com o status
    const resultados = arrayChaveValor.map((obj, idx) => ({ 
            ...obj, 
            'status' : statusLinks[idx] 
        })
    );

    return resultados;
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url);
                return res.status;
            }));
            return arrayStatus;
    } catch(err) {
        handleError(err);
    }
}
    