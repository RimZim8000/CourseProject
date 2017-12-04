import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import './App.css';
//const Header = () => <h1>Header</h1>;
const Dashboard = () => <h2>Dashboard</h2>;
const NewItem = () => <h1>NewItem</h1>;
const Landing = () => <h1>Landing</h1>;
const Settings = () => <h1>Settings</h1>;
class App extends Component {
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
