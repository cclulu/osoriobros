import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Header from './component/header/header.jsx'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
