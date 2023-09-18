// array para guardar a tarefa

const tarefa = [
    {'tarefa': 'Ler um livro bom'},
    {'tarefa': 'Correr uma maratona'},
];

localStorage.setItem('tarefa', JSON.stringify(tarefa));
JSON.parse(localStorage.getItem('tarefa'));
