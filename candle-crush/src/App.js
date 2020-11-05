import logo from './logo.svg';
import './App.css';
import Main from './containers/Main'
import NavBar from './components/NavBar'
import {Route, BrowserRouter, NavLink} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Main />
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
