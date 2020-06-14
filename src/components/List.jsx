import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';
import DoughnutPie from './DoughnutPieChart.jsx';

import '../assets/styles/ProjectStyles.css'

var dataToTransfer=[];

const List=(props)=>{
    
    return(
        <div className="list-container">
            <div>
                <h3>{props.listTitle }</h3>
            </div>
            <div>
                <ul>
                    {props.objectToList.map(character_json=>(
                        character_json.map(character=>(
                            <li key={character.id}>
                                <ListItem   character_item={character}/>
                            </li>
                        ))
                    ))}
                </ul>
            </div>
        </div>
    );
    
};

List.propTypes={
    listTitle:PropTypes.string,
};

export default List;