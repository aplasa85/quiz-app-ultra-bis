import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Bookmarks from './components/Pages/Bookmarks';


const cardsArr =[
  {id: 1, question: "What is the capital of Mexico?", answer: "Mexico City", bookmarked:false},
  {id: 2,question: "What is the capital of Croatia?", answer: "Zagreb", bookmarked:false},
  {id: 3,question:"What is the capital of Western Sahara?", answer: "El Ayoun", bookmarked:false},
]



function App() {
  return (
    <div className="App">
      
<Header/>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home cardsArr={cardsArr}/>}/> 
    <Route path="/about" element={<About />}/> 
    <Route path="/bookmarks" element={<Bookmarks />}/> 
  </Routes>
</BrowserRouter>

<Footer />
    </div>
  );
}

export default App;
