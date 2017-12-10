import React, {Component} from 'react';
import  {mainStore, isDataActive} from '../mainStore';
import { Link } from "react-router-dom";
import Login , {Logout} from '../Auth/GoogAuth'
class Header extends Component
{
  componentWillMount()
  {
    
  }
  doLogin()
  {
    console.log('Header component::doLogin-- before Login call');
    Login();
    //after loging call
    console.log('Header component::doLogin-- after loging call  user is -', mainStore.getState().login.payLoad);
    
  }
  doLogout()
  {
    console.log('Header component::doLogout-- before Logout call');
    Logout();
    //after loging call
    console.log('Header component::doLogout-- after logout call  user is -', mainStore.getState().login.payLoad);
    
  }
  renderContent(){
    console.log('in Header component renderContent  '+ mainStore.getState().login.payLoad);
    switch(mainStore.getState().login.payLoad){
        case undefined:
        case null:
        case false:
            return (
              <li>
              <a id='btnLogin' onClick={this.doLogin.bind(this)}>Login With Google</a>
            </li>);

        default:
            return [
            <li key='1'><Link 
              to={{pathname : (isDataActive())  ? '/MyItems': '/', state:{id: "0"}}}>New Item</Link></li>,
            <li key='2'><Link to={
              isDataActive()  ? '/MyItems/0': '/'}>MyItems</Link></li>,
            <li key='3'><Link to={
              isDataActive() ? '/Settings': '/'}>Dashboard</Link></li>,
            <li key='4'><a id='btnLogout' onClick={this.doLogout.bind(this)}>Logout</a></li>
        ];
    }
  }

    render(){
        return (
            <nav >
            <div className="nav-wrapper">
              <a className="myleftlogo">Logo</a>
              <ul id="nav-mobile" className="right">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;