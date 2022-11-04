
import React, {useState} from "react"; 


function Card({question, answer}) {
    const [showAnswer, setshowAnswer] = useState(false)

const handleClick = () => {
    setshowAnswer(!showAnswer)
}

    
    
    
    return(
    <div id= "card" className="card">

        <h2> {question} </h2>
        <button onClick={handleClick} type="button" className="card-button">Answer</button>
    {showAnswer ? <p>{answer}</p> : null }    



</div>


)}

export default Card;