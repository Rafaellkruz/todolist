document.addEventListener('DOMContentLoaded', function() {  // Adiciona um ouvinte de evento que será executado quando o DOM estiver completamente carregado.
  const taskForm = document.getElementById('task-form');    // Obtém o formulário de tarefas pelo seu id 'task-form'.
  const taskInput = document.getElementById('task-input');  // Obtém o campo de entrada de tarefas pelo seu id 'task-input'.
  const taskList = document.getElementById('task-list');    // Obtém a lista de tarefas pelo seu id 'task-list'.

  if (taskForm && taskInput && taskList) {                  // Verifica se todos os elementos do formulário foram encontrados no DOM.
      taskForm.addEventListener('submit', function(e) {     // Adiciona um ouvinte de evento para o evento 'submit' do formulário de tarefas.
          e.preventDefault();                               // Prevê a ação padrão do formulário (que seria recarregar a página).

          const taskText = taskInput.value.trim();          // Obtém o valor do campo de entrada de tarefas, removendo espaços em branco no início e no fim.

          if (taskText !== '') {                            // Verifica se o texto da tarefa não está vazio.
              addTask(taskText);                            // Adiciona a tarefa à lista de tarefas.
              taskInput.value = '';                         // Limpa o campo de entrada de tarefas.
              taskInput.focus();                            // Define o foco no campo de entrada de tarefas.
          }
      });

      function addTask(text) {                              // Função para adicionar uma tarefa à lista de tarefas.
          const li = document.createElement('li');          // Cria um novo elemento 'li' para a tarefa.
          li.textContent = text;                            // Define o conteúdo de texto do elemento 'li' como o texto da tarefa

          const deleteButton = document.createElement('button');    // Cria um botão para excluir a tarefa.
          deleteButton.textContent = 'Delete';                      // Define o conteúdo de texto do botão como 'Delete'.
          deleteButton.classList.add('delete');                     // Adiciona a classe 'delete' ao botão de exclusão.
          deleteButton.addEventListener('click', function() {       // Adiciona um ouvinte de evento ao botão de exclusão para o evento 'click'.
              taskList.removeChild(li);                             // Remove o elemento 'li' (tarefa) da lista de tarefas.
          });

          li.appendChild(deleteButton);                             // Adiciona o botão de exclusão como um filho do elemento 'li'.
          taskList.appendChild(li);                                 // Adiciona o elemento 'li' (tarefa) como um filho da lista de tarefas.
      }
  } else {
      console.error('Erro: Elementos do formulário não encontrados no DOM.');   // Exibe uma mensagem de erro no console se os elementos do formulário não forem encontrados no DOM.
  }
});
