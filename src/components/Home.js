import React, { useEffect } from 'react';

export default function HOme(){

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games?category=3d")
        .then(response => response.json())
        .then((data) => {
          console.log(data)
        })
      }, [])

    return(
        <div>
          
        </div>
    )
}

