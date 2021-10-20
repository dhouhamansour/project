import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./pages/Home" 
import Register from "./pages/Register" 
import Login from "./pages/Login" 
import Post from "./pages/Post" 
import Profile from "./pages/Profile" 
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
<Route exact path="/" component={Home}/>
<Route path="/register" component={Register}/>
<Route path="/post" component={Post}/>
<Route path="/login" component={Login}/>
<Route path="/profile" component={Profile}/>
   </BrowserRouter>
  );
}

export default App;
