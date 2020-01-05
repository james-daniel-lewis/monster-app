import React from 'react';
import './Card.css'

export const Card = (props) => {
  console.log(props);
  return (
    <div className="card-container"> 
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} />
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
        <p>{props.monster.phone}</p>
        <p>{props.monster.address.street}</p>
        <p>{props.monster.address.suite}</p>
        <p>{props.monster.address.city}</p>
        <p>{props.monster.address.zipcode}</p>
        <p>{props.monster.address.geo.lat}</p>
        <p>{props.monster.address.geo.long}</p>
        <p>{props.monster.company.name}</p>
        <p>{props.monster.company.catchPhrase}</p>
        <p>{props.monster.company.bs}</p>
        <p>{props.monster.website}</p>

    </div>
  )
};
