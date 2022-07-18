import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import Contact from "./components/contact.js"
import News from "./components/news.js"
import About from "./components/about.js"
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <div class="topnav">
      <a class="active" href="home">Home</a>
      <a href="news">News</a>
      <a href="contact">Contact</a>
      <a href="about">About</a>
    </div>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
