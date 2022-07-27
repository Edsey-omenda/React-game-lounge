import React, {useEffect, useState} from 'react';
import Post from './ReviewForm';


export default function GameDescription(){
    const[image, setImage] = useState("")
    const[title, setTitle] = useState("")
    const[genre, setGenre] = useState("")
    const[short_description, setDescription] = useState("")
    const[game_url, setGameUrl] = useState("")
    const[platform, setPlatform] = useState("")
    const[id, setId] = useState("")

    useEffect(() => {
        fetch("https://lit-earth-20586.herokuapp.com/games")
        .then(response => response.json())
        .then((games) => {
          
            games.map((game) => {
                return setId(game.id), setImage(game.thumbnail), setGameUrl(game.game_url), setPlatform(game.platform), setTitle(game.title), 
                setGenre(game.genre), setDescription(game.short_description);
            })
        })
      }, [])

return(
    <div className="text-bg-info p-3 " >
    <div className='container'>
        <center>
        <div className='card' style={{width : 25 + 'rem'}} >
        <img src={image} style={{height: 300 + 'px', width: 400 + 'px', }} alt={title}
         />
            {/* <h1>Id:{id}</h1> */}
            <h5>Game:{title}</h5>
            <h5> game platform:{platform}</h5>
            <p>Game link:{game_url}</p>
            <h6 className='badge bg-primary'>Game genre:{genre}</h6>
            <p>Game Description:{short_description}</p>
        </div>
        </center>
        <Post />
    </div>
    </div>
)
}