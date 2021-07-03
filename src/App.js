// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import About from './Components/About'
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Form2 from './Components/Contact';



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          This <code>src/App.js</code> is my first app.
        </p> */}
       {/* <Login></Login> */}
       <BrowserRouter>
         <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Form2} />
            <Redirect to='/login' />
          </Switch>
        </BrowserRouter>
       {/* <Login/>  
       <About/> */}
      </header>
    </div>
  );
}

export default App;
