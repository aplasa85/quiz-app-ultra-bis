import './App.css';
import Header from './components/header/Header';
import Card from './components/Card'
import { BsHouse, BsBookmarks, BsPerson } from "react-icons/bs";


const cardsArr =[
  {id: 1, question: "What is the capital of Mexico?", answer: "Mexico City"},
  {id: 2,question: "What is the capital of Croatia?", answer: "Zagreb"},
  {id: 3,question:"What is the capital of Western Sahara?", answer: "El Ayoun"},
]



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        
    <main className='app-main'>
    <ul className= "card-container">

  {cardsArr.map((card) => {
    return <Card question={card.question} answer={card.answer} key={card.id} /> 
  })}

    </ul>
    </main>
    
      </header>

      <div>
<ul className="navbar-bottom">
  <li className="navbar-icon" ><a className="link" href="#"><BsHouse /></a></li>
  <li className="navbar-icon"><a className="link" href="#"><BsBookmarks /></a></li>
  <li className="navbar-icon"><a className="link" href="#"><BsPerson /></a></li>
</ul>


      </div>
    </div>
  );
}

export default App;
