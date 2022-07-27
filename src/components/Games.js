import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

export default function Games(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("https://lit-earth-20586.herokuapp.com/games")
        .then(response => response.json())
        .then((games) => {
            setGames(games)
        //   console.log(games)
        })
      }, [])

      let myGames = games.map((game) => (<GameCard 
        gameTitle={game.title} 
        gameThumbnail={game.thumbnail} 
        key={game.id} />))

    return(
      <div className="text-bg-info p-3">
        <div className='container'>My Games
          <div className='row justify-content-start'>
            {myGames}
          </div>
        </div>
        </div>
    )
}

