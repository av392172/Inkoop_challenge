import React from 'react';
import './Card.css';


function Card({ name, src }) {
    return (
        <div className="card__container">
            {/* <h4>This is Card!!</h4> */}
            <img src={src} alt={name} />
            <div className="card__text">
                <h5>{name}</h5>
            </div>
        </div>
    )
}

export default Card
