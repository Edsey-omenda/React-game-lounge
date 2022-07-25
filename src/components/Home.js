import React, { useState } from 'react';


const ThreeeDGames = "https://www.freetogame.com/api/games?category=3d";

export default function HOme(){
const [games, setGames] = useState([]);
 const myGames = () =>{
    fetch(ThreeeDGames)
    .then((resposnse) => Response.json())
 }


    return(
        <div>
           
        </div>
    )
}