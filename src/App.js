import './App.css';
import Header from './components/header/Header';
import Card from './components/Card'

const cardsArr =[
  {id: 1, question: "What is the capital of Western Sahara?", answer: "El Ayoun"},
  {id: 2,question: "What is the capital of Croatia?", answer: "Zagreb"},
  {id: 3,question: "What is the capital of Mexico?", answer: "Mexico City"},
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
  <li className="navbar-icon" ><a className="link" href="#">Home</a></li>
  <li className="navbar-icon"><a className="link" href="#">Bookmarks</a></li>
  <li className="navbar-icon"><a className="link" href="#">About</a></li>
</ul>


      </div>
    </div>
  );
}

export default App;
