import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/CharStyles.css'



const ListItem=(props)=>{
    const { character_item }=props;
    const IMG_URI='https://rickandmortyapi.com/api/character/avatar/'+ character_item.id +'.jpeg'

    return(
        <div className="char-listItem-container">
            <div className="char-data-box" width="200px" heigth="200px">
                <div>
                    <h2>{character_item.name}</h2>
                </div>
                <div>
                    <h3>Spice: {character_item.species}</h3>
                    <h3>Type: {character_item.type}</h3>
                    <h3>Gender: {character_item.gender}</h3>
                    <h3>Status: {character_item.status}</h3>
                </div>
            </div>
            <div>
                {character_item.status==="Dead"
                    ?<img className="char-img char-img-grayscale" src={IMG_URI} alt=""/>
                    :<img className="char-img" src={IMG_URI} alt=""/>
                }
            </div>
        </div>
    );

};

export default ListItem;
