// Array com as habilidades do personagem
const habilidades = [
    "Força Sobre-humana",
    "Sentido Aranha",
    "Escalar Paredes",
    "Lançadores de Teia",
    "Agilidade Extrema",
    "Gênio Científico"
];

// Seleciona a lista vazia no HTML pelo ID
const listaElemento = document.getElementById('habilidades-lista');

// Itera sobre o array e cria os elementos HTML
habilidades.forEach(habilidade => {
    // Cria um elemento <li>
    const li = document.createElement('li');
    
    // Adiciona a classe CSS e o texto
    li.classList.add('badge-habilidade');
    li.textContent = habilidade;
    
    // Anexa o <li> dentro da <ul>
    listaElemento.appendChild(li);
});