import { Component } from "react";

export class PokemonInfo extends Component{


state = {
    pokemon: null
}


componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
    .then(response=>response.json())
    .then(pokemon=> this.setState({pokemon}))
}

componentDidUpdate(prevProps){
   if(prevProps.name !== this.props.name){
   

   }

   
   

}

                                                


render(){
        return(
            <div>
            {/* <img
            //   src={this.state.pokemon.sprites.other['official-artwork'].front_default}
              width="240"
              height="100"
              alt={this.props.name}
            /> */}
            <h2>{this.state.pokemon.forms[0].name}</h2>
            <ul>
              {this.state.pokemon.stats.map(entry => (
                <li key={entry.stat.name}>
                  {entry.stat.name}: {entry.base_stat}
                </li>
              ))}
            </ul>
          </div>
        )
    }
}