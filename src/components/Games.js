import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

export default function Games(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("https://nameless-anchorage-88298.herokuapp.com/games")
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
        <div className='container'>My Games
          <div className='row'>
            {myGames}
          </div>
        </div>
    )
}

