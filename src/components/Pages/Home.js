import React from "react";
import Card from "../Card";

function Home ({cardsArr}) {
    return (
        <div className='card-container'>
             {cardsArr.map((card) => {
    return <Card question={card.question} answer={card.answer} key={card.id} /> 
  })}
            
            </div>
    )}

    export default Home