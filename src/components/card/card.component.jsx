import React from 'react';

import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img alt="monster" src={require(`../../static/${props.id}.png`)}></img>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
