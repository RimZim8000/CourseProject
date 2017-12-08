import React, { Component, Layout } from "react";
import { Route, BrowserRouter, Switch  } from "react-router-dom";
//import {connect} from 'react-redux'
import Header from './Components/Header';
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import MyNewItem from './Components/MyNewItem';
import  {mainStore} from './mainStore';

import './App.css';
//const Header = () => <h1>Header</h1>;
//const Dashboard = () => <h2>Dashboard</h2>;
//const NewItem = () => <h1>NewItem</h1>;

const Settings = () => <h1>Settings</h1>;
class App extends Component {
  componentWillMount()
  {
    mainStore.subscribe(() =>{
      //refresh the screen
      console.log('in App:componentWillMount():mainStore.subscribe(() =>loggedin user is - ', mainStore.getState().login );
      console.log('in App:componentWillMount():mainStore.subscribe(() =>arrrived data is  - ', mainStore.getState().data );
      this.forceUpdate(()=> console.log('App::componentWillMount():mainStore.subscribe:: after forced the update'));
    });
    console.log('App::Header componentWillMount() - loggedin user is - ', mainStore.getState().login);
  }
  componentDidMount()
  {
    console.log('in----- class App extends Component::componentDidMount() ' , mainStore.getState().login);
  }
  render() {
    return (
      <BrowserRouter>
        <div className='myContainer'>
          <Header />
          <Switch>
            <Route exact path='/' component={Landing}> </Route>
            <Route path='/MyItems' component={Landing}> </Route>
            <Route path='/MyNewItem' component={MyNewItem}> </Route>
            <Route path='/Settings' component={Settings}> </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
//<div className='myContainer'> </div>
export default App;
