import Header from './components/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import Home from './components/Home/index';


function App() {


  return (
      <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/tickets" element={<Tickets/>} />
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
