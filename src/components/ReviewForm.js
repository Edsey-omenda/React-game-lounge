import React, {useState} from 'react';

export default function Post(){
    const[review, setReview] = useState("what a sharp shooter!")

    function handleReview(event){
          setReview(event.target.value)
    }

    function handleSubmit(event){
         event.preventDefault()

    }

    return(
        <div>
            <center>
            <h3>Share your experience about the game</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Write your review here'  onChange={handleReview} value={review}/>
        <button type="submit">Post</button>
      </form>
      <h3>Game reviews</h3>
            </center>
        </div>
    )
}