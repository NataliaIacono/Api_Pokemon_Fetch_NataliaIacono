import React, { useState } from 'react';

const Pokemon = ({ name, url }) => {
    const [dataPokemon, setDataPokemon] = useState({});

    const cargarDatosPokemon = async () => {
        if (dataPokemon.id) {
            return;
        }
        const response = await fetch(url);
        const data = await response.json();
        setDataPokemon(data);
    };
    cargarDatosPokemon();
    console.log(dataPokemon);

    return (
        <div>
            <h2>{name}</h2>
            <div>{dataPokemon && dataPokemon.sprites ? <img src={dataPokemon.sprites.front_default} alt={`Imagen de ${name} `} /> : <p> Buscando imagen...</p>}</div>
        </div>
    );
};
export default Pokemon;
