
import { Component } from 'react';
import  {Form} from './Form/Form'
import { createPortal } from 'react-dom';
import { TodoList } from './Todo/TodoList';
import initialTodo from './Todo/todos.json';
import { GlobalStyle } from './GlobalStyle.styled';
import { TodoEditor } from './TodoEditor/TodoEditor';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Modal } from './Modal/Modal';
import { ColorChange } from './ColorChanger/ColorChanger';
import ColorPicker from './ColorPicker/ColorPicker';
import { PokemonForm } from './Pokemon/PokemonForm';
import { ToastContainer } from "react-toastify";
const modalRoot = document.querySelector('#modal-root')
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state={
    isOpen: false,
    todos: initialTodo,
    filter: '',
    pokemon: null,
    loading: false,

  }
 
pokemonOnChange = (name)=>{
this.setState({pokemon: name})
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
// componentDidUpdate( prevProps, prevState ){
//   const {todos} = this.state
// if(prevState.todos !== this.state.todos){
// localStorage.setItem('todos', JSON.stringify(todos) )
// }


// componentDidMount(){
//   const todos = localStorage.getItem('todos')
//   const parseTodos = JSON.parse(todos)
//  if(parseTodos){
//   this.setState({
//     todos: parseTodos
//   })
// }
// }
// closeModal = () => {
//   this.setState({    isOpen: false})


// }
// openModal = () => {
//   this.setState({isOpen: true})

componentDidMount(){
  this.setState({loading: true})
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(respone=> respone.json())
.then(pokemon=> this.setState({pokemon}))
.finally(()=> this.setState({loading: false}) )
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
        <ColorPicker options={colorPickerOptions} />  */}
          {/* <TodoEditor addTodo={this.addTodo}/>
          <TodoList
          
          todos={ visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        
        <Filter value={this.props.filter} onChange={this.changeFilter} /> */}
        {/* <button type='button' onClick={this.openModal}>Open Modal</button>
      {this.state.isOpen && createPortal(<Modal onClose={this.closeModal}/>, modalRoot)  
       
} */}
<p></p>
<PokemonForm onSubmit={this.pokemonOnChange}/>
<ToastContainer autoClose={3000} style={{width: '100px'}}/>
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