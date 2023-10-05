import { Component } from "react";
import {Dna} from 'react-loader-spinner'

export class PokemonInfo extends Component{


state = {
    pokemon: null,
    loading: false,
    error: null, 
    status: 'idle'
}


componentDidUpdate(prevProps){
  if(prevProps.name !== this.props.name){
    this.setState({status: 'pending'})
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
    .then(response=>{
      if (response.status=== 200) {
        return response.json()
      }
       return new Promise.reject( new Error(`покемон ${this.props.name} не знайдено`) )
    } 
  )
    .then(pokemon=> this.setState({pokemon, status: 'resovled'}))
    .catch((error)=> this.setState({error, status: 'rejected'}))
    .finally(()=> this.setState({loading: false}))
                                         

  }

}
   


    
render(){

  const {pokemon, loading, error,status} = this.state
  switch (status) {
    case 'idle':
      return<p>Ведіть ім'я покемона</p>
      break;
      case 'pending':
      return <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
      
      break;
      case 'resovled':
        return <div>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          width="240"
          height="100"
          alt={pokemon.name}
        />
        <h2>{pokemon.name}</h2>
        <ul>
          {pokemon.stats.map(entry => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
      </div>
      
      break;
      case 'rejected':
        return <p>error.message</p>
      
      break;
  
    default:
      break;
  }
 
}
}