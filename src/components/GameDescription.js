import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


export default function GameDescription(){
    const[image, setImage] = useState("")
    const[title, setTitle] = useState("")
    const[genre, setGenre] = useState("")
    const[short_description, setDescription] = useState("")
    const[game_url, setGameUrl] = useState("")
    const[platform, setPlatform] = useState("")


    let {gameId} = useParams();
    const sandUrl = "https://www.freetogame.com/api/games?i="

    const gameUrl = sandUrl + gameId

    useEffect(() => {
        fetch(gameUrl)
        .then(response => response.json())
        .then((games) => {
            games.map((game) =>  {
                setTitle(game.title)
                setPlatform(game.platform)
                setGameUrl(game.game_url)
                setGenre(game.genre)
                setImage(game.thumbnail)
                setDescription(game.short_description)
            })
        })
      }, [gameUrl])

return(
    <div className='container'>
        <center>
        <img src={image} style={{height: 200 + 'px', width: 200 + 'px', }} alt={title}
         />
            <h5>{title}</h5>
            <h5>{platform}</h5>
            <p>{game_url}</p>
            <h6 className='badge bg-success'>{genre}</h6>
            <p>{short_description}</p>

        </center>
    </div>
)
}