import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

export default function Home(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games?category=shooter")
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
        <div className='container'>Home
          <div className='row'>
            {myGames}
          </div>
        </div>
    )
}

