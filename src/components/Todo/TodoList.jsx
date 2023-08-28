import React, { Component } from 'react';

export class TodoList extends Component {
    state = {
        todos: this.props.todos
    }

    deleteList = (index) => {
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1);
        this.setState({
            todos: newTodos
        });
    }

    render() {
        return (
            <div>
                <h1>TODO</h1>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>
                            <p>{todo.text}</p>
                            <button onClick={() => this.deleteList(index)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}