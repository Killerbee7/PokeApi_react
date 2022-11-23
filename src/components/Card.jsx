import React from 'react';
import classes from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className={classes.card_main}>
            <div className={classes.image}>
                <img src={props.image} alt="" />
                </div>
                <div className={classes.card_details}>
                <h2>{props.name}</h2>
                <Link to={`${props.name}`}>See more</Link>
                <p>Types: Land</p>
                
            </div>
            
        </div>
    );
};

export default Card;