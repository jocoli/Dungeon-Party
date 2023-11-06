import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  async function handleOnClick(event){
    event.preventDefault();
    window.location = "/character/" + props.id;
    
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="age">{"Age: " + props.age}</h3>
          <p className="race">{"Race: " + props.race}</p>
          <p className="class">{"Class: " + props.class}</p>
          <button className="characterButton" onClick={handleOnClick}>
          Character
          </button >
         
          </div>
  );
};

export default Card;