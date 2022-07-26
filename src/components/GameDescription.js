import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Post from './ReviewForm';


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
            const game=games.map((game) =>{
                setTitle(game.title)
                setPlatform(game.platform)
                setGameUrl(game.game_url)
                setGenre(game.genre)
                setImage(game.thumbnail)
                setDescription(game.short_description)
            })
            // games.map((game) =>  {
             
            // })
        })
      }, [gameUrl])

return(
    <div className='container'>
        <center>
        <img src={image} style={{height: 400 + 'px', width: 500 + 'px', }} alt={title}
         />
            <h5>Game:{title}</h5>
            <h5> game platform:{platform}</h5>
            <p>Game link:{game_url}</p>
            <h6 className='badge bg-primary'>Game genre:{genre}</h6>
            <p>Game Description:{short_description}</p>

        </center>
        <Post />
    </div>
)
}