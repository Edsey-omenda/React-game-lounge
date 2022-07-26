import React, {useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';
import Post from './ReviewForm';


export default function GameDescription(){
    const[image, setImage] = useState("")
    const[title, setTitle] = useState("")
    const[genre, setGenre] = useState("")
    const[short_description, setDescription] = useState("")
    const[game_url, setGameUrl] = useState("")
    const[platform, setPlatform] = useState("")


    // let {gameId} = useParams();
    // const sandUrl = "https://nameless-anchorage-88298.herokuapp.com/games"

    // const gameUrl = sandUrl + gameId

    useEffect(() => {
        fetch("https://nameless-anchorage-88298.herokuapp.com/games")
        .then(response => response.json())
        .then((games) => {
            // const game=games.map((game) =>{
            //     setTitle(game.title)
            //     setPlatform(game.platform)
            //     setGameUrl(game.game_url)
            //     setGenre(game.genre)
            //     setImage(game.thumbnail)
            //     setDescription(game.short_description)
            // })
            games.map((game) => {
                return setImage(game.thumbnail), setGameUrl(game.game_url), setPlatform(game.platform), setTitle(game.title), 
                setGenre(game.genre), setDescription(game.short_description);
            })
        })
      }, [])

return(
        <div class="text-bg-info p-3">
        <div className='container'>

        <center>
        <div className='card' style={{width : 25 + 'rem'}}>
        <img src={image} style={{height: 300 + 'px', width: 400 + 'px', }} alt={title}
         />
            <h5>Game:{title}</h5>
            <h5> game platform:{platform}</h5>
            <p>Game link:{game_url}</p>
            <h6 className='badge bg-info'>Game genre:{genre}</h6>
            <p>Game Description:{short_description}</p>
        </div>
        </center>
        <br></br>
        <Post />
        </div>
    </div>
)
}