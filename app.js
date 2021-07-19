//console.log(albuns)
// pegar o input
//se for sim, mostra  categorias disponíveis, pergunta qual tegoria que
//se não, mostra todos os albuns crescente em questão do ano

const albuns = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um album? S/N ')

if (entradaInicial.toLocaleLowerCase() === 's') {
    console.log('Essas são as estilos disponíveis:')
    console.log('Heavy Metal', '/Thrash Metal', '/Black Metal', '/Death Metal')
    
    const entradaEstilos = readline.question('Qual estilo voce escolhe: ')

    const retorno = albuns.filter(album => album.estilo === entradaEstilos)

    console.table(retorno)
} else {
    const albunsOrdenados = albuns.sort((a,b)=> a.ano - b.ano)
    console.log('Esses são todos os albuns disponíveis:')
    console.table(albunsOrdenados)
}
