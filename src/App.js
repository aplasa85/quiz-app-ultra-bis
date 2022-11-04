import './App.css';
import Header from './components/header/Header';
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        
    <main className='app-main'>
    <ul className= "card-container">

    <Card>
      

    </Card>

    <Card>
      
    </Card>

    <Card>
      
    </Card>

    </ul>
    </main>
    
      </header>

      <div>
<ul className="navbar-buttom">
  <li className="navbar-icon" ><a className="link" href="#">Home</a></li>
  <li className="navbar-icon"><a className="link" href="#">Bookmarks</a></li>
  <li className="navbar-icon"><a className="link" href="#">About</a></li>
</ul>


      </div>
    </div>
  );
}

export default App;
