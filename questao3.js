const fs = require('fs');

function lerFaturamento() {
    const data = fs.readFileSync('faturamento.json', 'utf-8');
    return JSON.parse(data);
}

function calcularFaturamento(faturamentoMensal) {
    
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento));
    const totalFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.faturamento, 0);
    const mediaFaturamento = totalFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        mediaFaturamento,
        diasAcimaDaMedia
    };
}

function main() {
    const faturamentoMensal = lerFaturamento();
    const resultado = calcularFaturamento(faturamentoMensal);

    console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
    console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
    console.log(`Média de faturamento: ${resultado.mediaFaturamento.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${resultado.diasAcimaDaMedia}`);
}

main();
