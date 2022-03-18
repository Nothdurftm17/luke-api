import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './views/Home';
import People from './views/People';
import Planet from './views/Planets';

function App() {
  const [category, setCategory] = useState("people")
  const [detail, setDetail] = useState("");

  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    history.push(`/${category}/${detail}`)

  }


  return (
    <div className="App">
      <div className="navBar d-flex justify-content-center align-items-center">
        <h1>StarWars</h1>
        <form onSubmit={onSubmitHandler}>
          <label className="mx-3">Search for:</label>
          <select className="form-select w-25 d-inline-block" onChange={(event)=>setCategory(event.target.value)}>
            <option> people </option>
            <option> planet </option>
          </select>
          <label className="mx-3">ID:</label>
          <input type="number" className="form-control w-25 d-inline-block" onChange={(event)=>setDetail(event.target.value)}/>
          <input type="submit" className='btn btn-success mx-3'/>
        </form>
      </div>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/people/:id">
          <People />
        </Route>

        <Route exact path="/planet/:id">
          <Planet />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
