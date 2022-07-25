import React from 'react';

export default function GameCard({thumbnail, title}){
    return(
        <div className='card' style={{width : 18 + 'rem'}}>
            <img src={thumbnail} className="card-img-top" alt={title}
            />
            <div className='card-body'>
                
            </div>
        </div>
    )
}