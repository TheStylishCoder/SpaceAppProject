import React from 'react';
import './AstronautDetail.css';

const AstronautDetail = ({selectedAstronaut}) => {

    if(!selectedAstronaut){
        return(null)
    }

    return(
        <>
        <div className = "astronaut-details">
            <h1>{selectedAstronaut.name}</h1>
            <img src ={selectedAstronaut.profile_image} height ="250" width="auto"/>
            <h3>D.O.B: {selectedAstronaut.date_of_birth}</h3>
            <h3>Nationality: {selectedAstronaut.nationality}</h3>
            <a target ="_blank" href={selectedAstronaut.wiki}>Find out More</a>
            <p>{selectedAstronaut.bio}</p>
            
        </div>
        </>
    )
}

export default AstronautDetail;