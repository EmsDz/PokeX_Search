import React, { Component } from 'react';
import PokeCard from '../components/PokeCard'
import axios from 'axios'

class PokeList extends Component {
    state = {
        pokemonData: []
    }
    componentDidMount() {  //cdm
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                // console.log(res);
                const pokemonData = res.data.results;
                this.setState({
                    pokemonData
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {

        const { pokemonData } = this.state;

        return (
            <PokeCard pokeData={pokemonData} />
        );
    }
}

export default PokeList;

/*
P.getPokemonByName("butterfree")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
*/