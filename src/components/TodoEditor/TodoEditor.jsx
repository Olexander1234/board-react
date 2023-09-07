import { Component } from "react";

export class TodoEditor extends Component{

    state = {
        textValue: ''
    }
    handlChange=(e)=>{
this.setState({textValue:e.currentTarget.value })
    }



    handlSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.textValue)
    }

    render (){
        return(
            <form onSubmit={this.handlSubmit}>
                <label >
                    напишіть свою задачу

                    <textarea value={this.state.textValue} onChange={this.handlChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}