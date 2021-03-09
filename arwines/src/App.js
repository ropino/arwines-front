import './App.css'
import Home from './components/Home';
import Products from './components/Products'
import SingleProducts from './components/'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Carrito'
import { Switch, Route, useHistory } from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={SingleProducts} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
