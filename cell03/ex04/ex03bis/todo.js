$(document).ready(function() {
    const $ftList = $('#ft_list');
    const $Btn = $('#btn');
    loadTodos();

    $Btn.click(function() {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText && todoText.trim() !== '') {
            addTodo(todoText);
        }
    });

    function addTodo(text) {
        const $todo = $('<div>')
            .text(text)
            .addClass('tasks')
            .click(function() {
                if (confirm('Delete this TO DO?')) {
                    $(this).remove();
                    saveTodos();
                }
            });
        $ftList.prepend($todo);
        saveTodos();
    }

    function saveTodos() {
        const tasks = $.map($('.tasks'), item => $(item).text());
        document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/;`;
    }

    function loadTodos() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(cookie => cookie.startsWith('tasks='));
        if (todoCookie) {
            const todos = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            $ftList.empty();
            todos.reverse().forEach(todo => { addTodo(todo); });
        }
    }
});