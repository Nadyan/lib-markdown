import abreArquivo from '../index';

const exemploArrayResultado = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('abreArquivo:', () => {
    it('deve ser uma função', () => {
        expect(typeof abreArquivo)
        .toBe('function');
    });
    it('deve retornar array de links quando existem links', async () => {
        const resultado = await abreArquivo('./test/arquivos/texto.md');
        expect(resultado)
        .toEqual(exemploArrayResultado);
    });
    it('deve retornar mensagem "Nenhum link encontrado" quando não existem links', async () => {
        const resultado = await abreArquivo('./test/arquivos/texto_sem_link.md');
        expect(resultado)
        .toBe("Nenhum link encontrado");
    });
    it('deve retornar erro quando o arquivo não existe', () => {
        async function capturaErro() {
            await abreArquivo('./test/arquivos/nao_existe.md');

            expect(capturaErro)
            .toThrowError(/arquivo não encontrado/);
        }
    });
});
