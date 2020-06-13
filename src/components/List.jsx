import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';
import DoughnutPie from './DoughnutPieChart.jsx';

import '../assets/styles/ProjectStyles.css'

var dataToTransfer=[];

const List=(props)=>{
    
    // try {
    //     props.TrimFirst=="true"
    //         ?dataToTransfer=props.areaByType.slice(0,props.areaByType.length)
    //         :dataToTransfer=props.areaByType
    //     console.log(dataToTransfer)
    // } catch (error) {
    //     console.log(error)
    // }
    
    return(
        <div className="list-container">
            <div>
                <h3>{props.listTitle }</h3>
            </div>
            <div>
                <ul>
                    {props.objectToList.map(character_json=>(
                        character_json.map(character=>(
                            // console.log(character.name),
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