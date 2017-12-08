import React, {Component} from 'react';
import mainStore, {isUserAuthenticated, getUserName} from '../mainStore';

class MyNewItem extends Component
{
    componentWillMount()
    {
        if (!isUserAuthenticated)
        {
            this.context.router.transitionTo('/');
        }
    }
    render(){
        return(
            <div>
                Hi From New Item!
            </div>
        );

    }
}
export default MyNewItem;