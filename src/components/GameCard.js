import React from 'react';
import { Link } from "react-router-dom";

export default function GameCard({gameThumbnail, gameTitle, gameId}){
    return(
        <div className='card' style={{width : 18 + 'rem'}}>
            <img src={gameThumbnail} className="card-img-top" alt={gameTitle}
            />
            <div className='card-body'>
            <h5 className="card-title">{gameTitle}</h5>
                <Link to={"/game/"+gameId} className="btn btn-success">Game Description</Link>
            </div>
        </div>
    )
}