import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';
import About from './About';
import { Routes,Route,Link} from 'react-router-dom';


import Homepage from './Homepage';

function App() {
  const day = 2;
  return (
    <div className="App">
      <nav className='navbar'>
        
            <Link to="/" className="nav-item">Home page</Link>
            <Link to="/about-me" className="nav-item">About-me</Link>
            <Link to="/contact-us" className="nav-item">Contact us</Link>
       
              
          
        
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/contact-us' element={<Contacts />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
