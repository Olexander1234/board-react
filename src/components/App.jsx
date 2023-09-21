
import { Component } from 'react';
import  {Form} from './Form/Form'

import { TodoList } from './Todo/TodoList';
import initialTodo from './Todo/todos.json';
import { GlobalStyle } from './GlobalStyle.styled';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Modal } from './Modal/Modal';


export class App extends Component {
  state={
    isOpen: false,
    todos: initialTodo,
    filter: '',
  }
 

addTodo = (text)=>{
  const newTodo = {
    id: nanoid(),
    text,
    completed: false
  }
  
this.setState((prevState)=>{
  return {
    todos: [newTodo, ...prevState.todos]
  }
})

}
toggleCompleted = todoId => {
  console.log(todoId)
  this.setState(({ todos }) => ({
  todos: todos.map(todo =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  ),
}));
};
getVisibleTodos = () => {
  const { filter, todos } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter),
  );
};
getFormData = (data) =>{
  console.log(data);
  this.setState({formData: data})
}
changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};
calculateCompletedTodos = () => {
  const { todos } = this.state;

  return todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  );
};
deleteTodo = todoId => {
  this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
  }));
};
componentDidUpdate( prevProps, prevState ){
  const {todos} = this.state
if(prevState.todos !== this.state.todos){
localStorage.setItem('todos', JSON.stringify(todos) )
}

}
componentDidMount(){
  const todos = localStorage.getItem('todos')
  const parseTodos = JSON.parse(todos)
 if(parseTodos){
  this.setState({
    todos: parseTodos
  })
}
}
toggleModal = () => {
  this.setState((prevState) => ({
    isOpen: !prevState.isOpen
  }));
}
render() {
//     const countTotal = this.state.good + this.state.neutral + this.state.bad;
//     const positivePercentage = this.calculatePositivePercentage();
// const {stickerLabel} = this.state
const visibleTodos = this.getVisibleTodos();
const totalTodoCount = this.state.todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    return (
      <>
      
        {/* <ColorChange />
        <ColorPicker options={colorPickerOptions} /> */}
          {/* <TodoEditor addTodo={this.addTodo}/>
          <TodoList
          
          todos={ visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        
        <Filter value={this.props.filter} onChange={this.changeFilter} /> */}
        <button type='button' onClick={this.toggleModal}>Open Modal</button>
      {this.state.isOpen &&    <Modal onClose={this.toggleModal}/>
       
}
   <GlobalStyle/>
        {/* <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handlClick} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotal}
          positivePercentage={positivePercentage}
        />
        {stickerLabel &&   <h1>{stickerLabel}</h1>}
       
<StickersList stickers={stickers} onGetLabel={this.labelHandler}/> */} 
{/* <Form onChange={this.getFormData}/> */}

      </>
    );
  }
}