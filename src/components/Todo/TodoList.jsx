import React, { Component } from 'react';
import { List, Item , Text, Button, } from './TodoList.style'
export class TodoList extends Component {
    // state = {
    //     todos: this.props.todos
    // }

    // deleteList = (index) => {
    //     const newTodos = [...this.state.todos];
    //     newTodos.splice(index, 1);
    //     this.setState({
    //         todos: newTodos
    //     });
    // }

    render() {
        return (
            <div>
                <h1>TODO</h1>
                <List>
                    {this.state.todos.map((todo, index) => (
                        <Item key={index}>
                            <Text>{todo.text}</Text>
                            <Button onClick={() => this.deleteList(index)}>Видалити</Button>
                        </Item>
                    ))}
                </List>
            </div>
        );
    }
}