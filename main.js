const trilho = document.getElementById('trilho');
const body = document.body;

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
});

// Acessibilidade (se quiser deixar junto)
document.getElementById('aumentar-fonte').addEventListener('click', () => {
    document.body.style.fontSize = 'larger';
});

document.getElementById('diminuir-fonte').addEventListener('click', () => {
    document.body.style.fontSize = 'smaller';
});
