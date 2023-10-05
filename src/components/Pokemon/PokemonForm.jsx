import { Component } from "react";
import { ImSearch } from 'react-icons/im';
import { toast } from "react-toastify";

export class PokemonForm extends Component{
    state = {
        value: ''
    }
handleChange = (e)=>{
    this.setState({value: e.currentTarget.value.toLowerCase()})
}
handleSubmit = (e)=>{
e.preventDefault()
if (this.state.value === '') {
 return toast.error('помилка ')
}
this.props.onSubmit(this.state.value)
this.setState({value: ''})
}
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                
                <input type="text" value={this.state.value} onChange={this.handleChange}  />
                <button type="submit" > 
                <ImSearch style={{ marginRight: 8 }} />
                Submit
                </button>
            </form>
        )
    }
}