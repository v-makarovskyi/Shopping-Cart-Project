import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart'
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Navbar/>
        <Switch>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" exact component={Home}/>
          <Redirect to="/not-found"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
