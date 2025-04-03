const notasParaCifras = {
    "do": "C", "re": "D", "mi": "E", "fa": "F",
    "sol": "G", "la": "A", "si": "B"
};

const cifrasParaNotas = {
    "c": "Dó", "d": "Ré", "e": "Mi", "f": "Fá",
    "g": "Sol", "a": "Lá", "b": "Si"
};


function normalizarEntrada(texto) {
    return texto.toLowerCase()
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, ""); 
}

let entrada = prompt("Digite uma nota (ex: Dó) ou uma cifra (ex: C):");
entrada = normalizarEntrada(entrada);

if (notasParaCifras[entrada]) {
    alert("Cifra correspondente: " + notasParaCifras[entrada]);
} else if (cifrasParaNotas[entrada]) {
    alert("Nota correspondente: " + cifrasParaNotas[entrada]);
} else {
    alert("Nota ou cifra inválida!");
}
