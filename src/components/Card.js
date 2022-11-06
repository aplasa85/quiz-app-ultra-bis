
import React, {useState} from "react"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Card({question, answer, bookmarked}) {
    const [showAnswer, setshowAnswer] = useState(false)
    const  [isBookmarked, setIsBookmarked] = useState (bookmarked);

   



const handleAnswer = () => {
    setshowAnswer(!showAnswer)
}
const toggleBookmarked = () => {
    setIsBookmarked (!isBookmarked)
}
    
    
    return(
    <div id= "card" className="card">
 <button onClick={toggleBookmarked}> {
isBookmarked ? <AiFillStar/>  : <AiOutlineStar/>}</button> 
        <h2> {question} </h2>
        <button onClick={handleAnswer} type="button" className="card-button">Answer</button>
    {showAnswer ? <p>{answer}</p> : null }    
       
        


</div>


)}

export default Card;