
import Home from './components/Home';
import Products from './components/Products'
import SingleProducts from './components/SingleProducts'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route, useHistory, } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={SingleProducts} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>

    </div >


  );
}

export default App;
