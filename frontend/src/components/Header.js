import React, {Component} from 'react';


class Header extends Component
{
  renderContent(){
    console.log('in renderContent  '+ this.props.auth);
    switch(this.props.auth){
        case null:
            return ;
        case false:
            return <li><a href='/auth/google'>Login With Google</a></li>;
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
            <a href='/api/logout'>
              Google Logout
            </a>
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