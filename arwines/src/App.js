import './App.css'
//import Home from './components/Home';
import Wines from './components/Wines'
import SingleWine from './components/SingleWine'
//import Login from './components/Login'
//import Register from './components/Register'
//import Cart from './components/Cart'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    
    <div>
    <BrowserRouter>
      <Switch>
      {/*  <Route exact path='/' component={Home} />*/}
        <Route exact path='/products' component={Wines}  />
      <Route exact path='/products/:id' component={SingleWine} />
        {/*  <Route path='/login' component={Login} />
  <Route path='/register' component={Register} />*/}
      </Switch>
    </BrowserRouter>

  </div >
  );
}

export default App;
