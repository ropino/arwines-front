import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

// componentes
// import Home from './components/Home';
// import Products from './components/Products'
// import SingleProducts from './components/'
import Login from "./components/Login";
import Register from './components/Register'
import Cart from './components/Cart'
// store
import store from "./store/store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/products/:id' component={SingleProducts} /> */}
            <Route path="/login" component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
