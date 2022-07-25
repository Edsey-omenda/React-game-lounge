import React from 'react';
import { Link } from "react-router-dom";

export default function GameCard({thumbnail, title, gameId}){
    return(
        <div className='card' style={{width : 18 + 'rem'}}>
            <img src={thumbnail} className="card-img-top" alt={title}
            />
            <div className='card-body'>
            <h5 className="card-title">{title}</h5>
                <Link to={"/meal/"+gameId} className="btn btn-primary">Game Description</Link>
            </div>
        </div>
    )
}