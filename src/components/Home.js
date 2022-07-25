import React, { useEffect, useState } from 'react';

export default function HOme(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games?category=3d")
        .then(response => response.json())
        .then((data) => {
            setGames(data.games)
          console.log(data)
        })
      }, [])

      let myGames = games.map((game) => (<GameCard 
        gameName={} 
        gameThumbnail={} 
        gameId={}))

    return(
        <div className='container'>Home
          <div className='row'>
            {myGames}
          </div>
        </div>
    )
}

