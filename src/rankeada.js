// Função para calcular o saldo de partidas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador com base nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) return "Ferro";
    if (vitorias >= 10 && vitorias <= 20) return "Bronze";
    if (vitorias >= 21 && vitorias <= 50) return "Prata";
    if (vitorias >= 51 && vitorias <= 80) return "Ouro";
    if (vitorias >= 81 && vitorias <= 90) return "Diamante";
    if (vitorias >= 91 && vitorias <= 100) return "Lendário";
    return "Imortal";
}

// Função principal que exibe o saldo e o nível do jogador
function exibirResultado(vitorias, derrotas) {
    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}

// Teste da função com exemplo de vitórias e derrotas
const vitorias = 85;
const derrotas = 20;

exibirResultado(vitorias, derrotas);
