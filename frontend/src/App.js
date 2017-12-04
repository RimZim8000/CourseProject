import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
//import {connect} from 'react-redux'
import Header from './components/Header';
import  {mainStore} from './mainStore';

import './App.css';
//const Header = () => <h1>Header</h1>;
const Dashboard = () => <h2>Dashboard</h2>;
const NewItem = () => <h1>NewItem</h1>;
const Landing = () => <h1>Landing</h1>;
const Settings = () => <h1>Settings</h1>;
class App extends Component {
  componentWillMount()
  {
    mainStore.subscribe(() =>{
      //refresh the screen
      console.log('in App:componentWillMount():mainStore.subscribe(() =>loggedin user is - ', mainStore.getState() );
      this.forceUpdate(()=> console.log('App::componentWillMount():mainStore.subscribe:: after forced the update'));
    });
    console.log('App::Header componentWillMount() - loggedin user is - ', mainStore.getState());
  }
  componentDidMount()
  {
    console.log('in----- class App extends Component::componentDidMount() ' , mainStore.getState());
  }
  render() {
    return (
      <BrowserRouter>
        <div className='myContainer'> 
        <Header />
          <Route exact path='/' component={Landing}> </Route>
          <Route path='/MyItems' component={Dashboard}> </Route>
          <Route path='/NewItem' component={NewItem}> </Route>
          <Route path='/Settings' component={Settings}> </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
