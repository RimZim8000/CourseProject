import React, {Component} from 'react';
import  {mainStore} from '../mainStore';

class Landing extends Component { 
  getRows(arrayOfJSONObjects)
  {
    var retArrayOfRows = [];
    var len = 100; //arrayOfJSONObjects.length;
    for (var i=0; i< len; i++){
      var row=[];
      if (arrayOfJSONObjects[i] !== null && arrayOfJSONObjects[i] !== undefined)
      {
        var oneRow = arrayOfJSONObjects[i];
        if(oneRow !== null && oneRow !== undefined)
        {
          for (var name in oneRow){
          row.push(<td>{oneRow[name]}</td>);
          }
          retArrayOfRows.push(<tr>{row}</tr>);
        }
      }
    }
    return retArrayOfRows;
  }

  getHeaders(arrayOfJSONObjects)
  {

    var columns=[];
    var firstRow = arrayOfJSONObjects[0];
    if (firstRow !== null && firstRow !== undefined)
    { 
      //console.log(firstRow.length);
      for (var name in firstRow){
      columns.push(<th>{name}</th>);
      }
    }
    return columns;
  }
  
  //JSON.stringify
    myData() {
        return ( <div>
      {(mainStore.getState().data !== null 
        && mainStore.getState().data.payLoad !== undefined
        && mainStore.getState().data.payLoad !== false ) 
        ?
        <table className='blueTable'>
         <tbody>
         <tr>{this.getHeaders(mainStore.getState().data.payLoad)} </tr>
          {this.getRows(mainStore.getState().data.payLoad)}
          </tbody>
        </table> 
        : '.... So that we can get your data from the datastore'}
        </div>
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
      <h5>Welcome to the CourseProject 2017  </h5>
        <h3>
        { (mainStore.getState().login.payLoad !== undefined
                    && mainStore.getState().login !== null
                    && mainStore.getState().login !== false
                    && mainStore.getState().login.payLoad !== false ) 
                    ? 
                     'Hello, ' + mainStore.getState().login.payLoad.name 
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