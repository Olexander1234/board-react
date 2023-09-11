import React, { Component } from "react";

export class TodoEditor extends Component {
    state = {
        textValue: '',
        level: 'junior',
        licence: 'false'
    }

    handlChange = (e) => {
        this.setState({ textValue: e.currentTarget.value })
    }

    handlRadioChange = (e) => {
        this.setState({ level: e.currentTarget.value })
    }

    handlSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.textValue, this.state.level)
    }
    handlChecked = (e)=>{
        this.setState({
            licence: e.currentTarget.checked
        })
    }

    render() {
        return (
            <form onSubmit={this.handlSubmit}>
                <label>
                    напишіть свою задачу
                    <textarea value={this.state.textValue} onChange={this.handlChange} />
                </label>
                <button type="submit">Submit</button>
                <h2>Level</h2>
                <label>
                    <input type="radio" value="junior" checked={this.state.level === 'junior'} onChange={this.handlRadioChange} />
                    junior
                </label>
                <label>
                    <input type="radio" value="middle" checked={this.state.level === 'middle'} onChange={this.handlRadioChange} />
                    middle
                </label>
                <label>
                    <input type="radio" value="senior" checked={this.state.level === 'senior'} onChange={this.handlRadioChange} />
                    senior
                </label>
                <label >
                    <input type="checkbox" name="licence" checked={this.state.licence} onChange={ this.handlChecked}/>
                    погоджуюся з умовами договору
                </label>
            </form>
        )
    }
}