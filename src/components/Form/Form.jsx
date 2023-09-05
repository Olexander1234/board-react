import { Component } from "react";
export class Form extends Component{
state = {
    name: '',
    tag: '',
}
handelImput = (e)=>{
    const{name, value} = e.currentTarget
  this.setState({
  [name]: value
  })
  
  }
  handelSubmit = (e)=>{
    e.preventDefault()
  console.log(this.state);
  this.props.onChange(this.state)
  this.reset()
  }
  reset = ()=>{
    this.setState({
      name: '', 
      tag: '',
    })
  }
render(){
    
return(
    <form onSubmit={this.handelSubmit}>
<label htmlFor="name">
  name
<input id='name' name='name' type="text" value={this.state.name} onChange={this.handelImput} />
</label>

<label htmlFor="tag">
  tag
<input id='tag' name='tag' type="text" value={this.state.tag} onChange={this.handelImput} />
</label>
<button type='submit'>submit</button>
</form>

)

}




}