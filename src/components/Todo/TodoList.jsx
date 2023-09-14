import React, { Component } from 'react';
import { List, Item , Text, Button } from './TodoList.style';

export class TodoList extends Component {
  

    render() {
        return (
            <div>
                <h1>TODO</h1>
                <List>
                    {this.props.todos.map(({text, id,  completed} ) => (
                        <Item key={id}>
                            <input  type="checkbox" checked={completed} onChange={() => this.props.onToggleCompleted(id)}
        /> 
                            <Text>{text}</Text>
                            <Button onClick={()=> this.props.onDeleteTodo(id) }>Видалити</Button>
                        </Item>
                  
                    ))}
                </List>
 
            </div>
        );
    }
}
