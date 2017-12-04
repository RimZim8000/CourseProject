import React, {Component} from 'react';
import  {mainStore} from '../mainStore'
import Login , {Logout} from '../Auth/GoogAuth'
class Header extends Component
{
  componentWillMount()
  {
    // mainStore.subscribe(() =>{
    //   //refresh the screen
    //   console.log('in Header:componentWillMount():mainStore.subscribe(() =>loggedin user is - ', mainStore.getState() );
    //   this.forceUpdate(()=> console.log('forced the update'));
    // });
    // console.log('Header componentWillMount() - loggedin user is - ', mainStore.getState());
  }
  doLogin()
  {
    console.log('Header component::doLogin-- before Login call');
    Login();
    //after loging call
    console.log('Header component::doLogin-- after loging call  user is -', mainStore.getState());
    
  }
  doLogout()
  {
    console.log('Header component::doLogout-- before Login call');
    Logout();
    //after loging call
    console.log('Header component::doLogout-- after loging call  user is -', mainStore.getState());
    
  }
  renderContent(){
    console.log('in Header component renderContent  '+ mainStore.getState());
    switch(mainStore.getState()){
        case null:
        case false:
            return (
              <li>
              <a id='btnLogin' onClick={this.doLogin.bind(this)}>Login With Google</a>
            </li>);

        default:
            return [
            <li key='1'>
              <a href='/api/New'>
                New
              </a>
              </li>,
            <li key='2'>
              <a href='/api/Items'>
                Items
            {/* My Items:{this.props.auth.credits} */} 
              </a>
            </li>,
            <li key='3'>
              <a href='/api/register'>
                Register
              </a>
            </li>,
            <li key='4'>
            <li>
            <a id='btnLogout' onClick={this.doLogout.bind(this)}>Logout</a>
            </li>;
          </li>
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