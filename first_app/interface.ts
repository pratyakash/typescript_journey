import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const todo_data = axios.get(URL).then(res => {
    const data = res.data as Todo;

    const id = data.id;
    const title = data.title;
    const completed = data.completed;

    logTodo(id, title, completed);

});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        Id is => ${id}
        Title is => ${title}
        Is Completed => ${completed}
    `)
}