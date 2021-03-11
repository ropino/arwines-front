import Wines from './components/Wines'
import SingleWine from './components/SingleWine'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Wines} />
          <Route exact path='/products' component={Wines} />
          <Route exact path='/products/:id' render={({match}) => <SingleWine match={match}/>} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
