//Declarar um array que armazena as tarefas
let banco = [];

//configurar os dados para o localStorage

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco)); 

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
            <input type="checkbox" ${status} data-indice=${indice}>
            <section>${tarefa}</section>
            <input type="button" value="X" data-indice=${indice}>
            `;

    document.getElementById('todoList').appendChild(novoItem);
}

const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach ( (item, indice) => (item.tarefa, item.status, indice));
}



const limparTarefas = () => {
    const lista = document.getElementById('todoList');
    while(lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;

    if (texto === 'seila') {
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status':''})
        setBanco(banco);
        atualizarTela();
        evento.target.value = '';
    }
}

document.getElementById('novoItem').addEventListener('keypress', inserirItem);