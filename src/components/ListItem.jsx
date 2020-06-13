import React from 'react';
import PropTypes from 'prop-types';



const ListItem=(props)=>{
    const { character_item }=props;
    const IMG_URI='https://rickandmortyapi.com/api/character/avatar/'+ character_item.id +'.jpeg'
    return(
        <div className="job-listItem-container">
            <div>
                <img src={IMG_URI} alt=""/>
            </div>
            <div>
                <h5>{character_item.name}</h5>
            </div>
            {/* <div>
                <h6>{jobStructureType}</h6>
            </div>
            <div>
                <h6>{jobType} ({jobM2} m2)</h6>
            </div>
            <div>
                <h6>{jobCity} ({jobState})</h6>
            </div> */}
        </div>
    )
};

// ListItem.propTypes={
//     jobTitle:PropTypes.string,
//     jobCompany:PropTypes.string,
//     jobType:PropTypes.string,
//     jobM2:PropTypes.number,
// };

export default ListItem;
