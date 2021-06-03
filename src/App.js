import './App.css';
import Home from './Home';
import { Route, BrowserRouter } from 'react-router-dom';
import Details from './Details';
import Edit from './Edit';
import Add from './Add';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/Details/:id" >
        <Details
        />
      </Route>
      <Route path="/Edit" >
        <Edit
        />
      </Route>
      <Route path="/Add" >
        <Add
        />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
