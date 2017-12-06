import React, {Component} from 'react';
import  {mainStore} from '../mainStore';

class Landing extends Component { 
    myData() {
        return ( <h4>
      {(mainStore.getState().data !== null 
        && mainStore.getState().data.payLoad !== undefined
        && mainStore.getState().data.payLoad !== false ) 
        ?' Your data : ' + JSON.stringify(mainStore.getState().data.payLoad)  
        : '.... So that we can get your data from the datastore'})
        </h4>
        );
    }
    render(){
    console.log('mainStore ', mainStore);
    console.log('mainStore.getState()', mainStore.getState());
    console.log('mainStore.getState().login', mainStore.getState().login);
    console.log('mainStore.getState().login.payLoad', mainStore.getState().login.payLoad);
    
    //console.log('mainStore.getState().data', mainStore.getState().data);
    console.log('mainStore.getState().data', mainStore.getState().data);
    console.log('mainStore.getState().data.payLoad', mainStore.getState().data.payLoad);
    // function availableData () 
    // {
    //   return ((mainStore.getState().data !== null 
    //       && Object.keys(mainStore.getState().data.payLoad).length === 0  
    //       && mainStore.getState().data.payLoad !== false ) 
    //     ? JSON.stringify(mainStore.getState().data.payLoad) 
    //     : ' No data');
    // }
    
    return (
      <div className='myContainer'>
      <div>
        <h3>
        Hi There : { (mainStore.getState().login.payLoad !== undefined
                    && mainStore.getState().login !== null
                    && mainStore.getState().login !== false
                    && mainStore.getState().login.payLoad !== false ) 
                    ? 
                      JSON.stringify(mainStore.getState().login.payLoad) 
                        : 'Please Login using Google Account' } 
        </h3>
        </div>
        <br />
  
      
    
        <div>
        
          { this.myData() }
        
        </div>
        </div>
    ); 
  }     
  };
  export default Landing;