import React from 'react';

export default function Post(){

    return(
        <div>
              <form onSubmit={handleSubmit}>
        <input type="text"   />
        <input type="text"   />
        <button type="submit">Submit</button>
      </form>
      <h3>Game review</h3>
      
        </div>
    )
}