import React, { Component } from 'react';
import { List, Item , Text } from './TodoList.style';

export class TodoList extends Component {
    state = {
        todos: this.props.todos
    }

    render() {
        return (
            <div>
                <h1>TODO</h1>
                <List>
                    {this.state.todos.map((todo, index) => (
                        <Item key={index}>
                            <Text>{todo.text}</Text>
                        </Item>
                    ))}
                </List>
            </div>
        );
    }
}
