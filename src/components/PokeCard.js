import React, { Fragment } from 'react';
import CardData from "./CardData";
import { Grid } from '@material-ui/core';
import Navbar from "./layout/Navbar";

const PokeCard = ({ pokeData }) => {
    return (
        <Fragment>
            <Navbar />
            <h1>Pokemons List</h1>

            <Grid container justify="center">
                {pokeData.map((pokemon, index) => {
                    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
                    let pokeIndex = pokemon.url.split('/')[pokemon.url.split("/").length - 2];

                    return <CardData key={index} name={pokemon.name} imag={`${url}${pokeIndex}.png?raw=true`} />
                })}
            </Grid>

        </Fragment>
    );
}

export default PokeCard;