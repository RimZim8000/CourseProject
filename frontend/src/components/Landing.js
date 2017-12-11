import React, {Component} from 'react';
import  {mainStore, getData, isDataActive,  isUserAuthenticated} from '../mainStore';
import AddItem from './AddItem';
import { Link } from "react-router-dom";
import _ from 'underscore';
class Landing extends Component { 
  componentWillMount()
  {
    console.log('Landing:componentWillMount(): this.props.params.id ', this.props.match.params.id);
  }
  getGridRows(arrayOfJSONObjects)
  {
    console.log('Landing:getGridRows(): this.props.location ', this.props.location);
    var mykeys = _.values(arrayOfJSONObjects);
    console.log('Landing: getGridRows(arrayOfJSONObjects) - mykeys.length', mykeys.length);
    var retArrayOfRows = [];
    for (var i=0; i < arrayOfJSONObjects.length; i++)
    {
      var row = _.mapObject(arrayOfJSONObjects[i], function(val, key) {
      return (<td >{val}</td>);
      });
      var values = _.values(row);
      // values.push(
      //   <td>
      //     {/* <Link style={{margin: '10px'}} to={{ pathname:'/MyItems', state:{id:arrayOfJSONObjects[i].id} }}>Edit</Link> */}
      //     <Link style={{margin: '10px'}} to={{ pathname:'/MyItems', state:{id:i} }}>Edit</Link>
      //     <Link style={{margin: '10px'}}to={'/MyNewItem'}>Delete</Link>
      //   </td>);
      // console.log('Landing:getGridRows(): assigned id to Row numer i= ' , i, '    is arrayOfJSONObjects[i]=  ', arrayOfJSONObjects[i]);
//this works      retArrayOfRows.push(<tr id={arrayOfJSONObjects[i]} onClick={this.handleClick.bind(this, i)}>{values}</tr>);


// if the row is selected, make its background red, else leave it alone
      let highlightedRow = (this.props.location.state !== undefined)? this.props.location.state.id:0;
        if (highlightedRow === i){
          retArrayOfRows.push(<tr className='highlightedRow'><Link style={{color:'brown', fontSize:'large', textDecoration: 'underline'}} to={{ pathname:'/MyItems', state:{id:i} }}>{values}</Link></tr>);
        }
        else{
          retArrayOfRows.push(<tr><Link style={{color:'gray'}} to={{ pathname:'/MyItems', state:{id:i} }}>{values}</Link></tr>);
        }
      }
    return retArrayOfRows;
   
  }
  handleClick(i, e)
  {
    console.log("Landing extends Component: table row clicked event info (i) is = ", i , "   an e is ", e);
    
  }
  getGridHeaders(arrayOfJSONObjects)
  {
    var columns=[];
    var firstRow = arrayOfJSONObjects[0];
    if (firstRow !== null && firstRow !== undefined)
    { 
      //console.log(firstRow.length);
      for (var name in firstRow){
        columns.push(<th >{name}</th>);
      }
      //columns.push(<th>Actions</th>);
    }
    return columns;
  }
    //className='blueTable'// class="bordered highlight responsive-table"
    myRenderData() {
        return ( <div>
      {(isDataActive()) 
        ?
        <div style={{border:'1px solid black'}}>
        <table className='responsive-table' style={{ maxHeight: '200px'}}>
         <tbody >
         <tr>{this.getGridHeaders(getData())} </tr>
          {this.getGridRows(getData())}
          </tbody>
        </table> 
         </div>
        : '.... So that we can get your data from the datastore'}
        </div>
        );
    }
    render(){
      // console.log('mainStore ', mainStore);
      // console.log('mainStore.getState()', mainStore.getState());
      // console.log('mainStore.getState().login', mainStore.getState().login);
      // console.log('mainStore.getState().login.payLoad', mainStore.getState().login.payLoad);
      
      // console.log('mainStore.getState().data', mainStore.getState().data);
      // console.log('mainStore.getState().data.payLoad', mainStore.getState().data.payLoad);
      console.log('in Landing:render(): this.props.location ', this.props.location);
      //if ( this.props.params.id === undefined) this.props.params.id=0;
      
    return (
      <div className='myContainer'>
        <div>
        <h5>Welcome to the CourseProject 2017  </h5>
          <h3>
          { (isDataActive() &&  isUserAuthenticated()) ? 'Hello, ' + mainStore.getState().login.payLoad.name 
                              : 'Please login using your Google Account' } 
          </h3>
        </div>
        <div >
          {(isDataActive() &&  isUserAuthenticated()) ?
          <div>
            <div >
              { this.myRenderData() }
            </div>
            <div>
            { <AddItem 
                dataId={(this.props.location.state !== undefined) ?
                  this.props.location.state.id : '0'} 
              />} 
            </div>
          </div>
          :
          <div>
            .... So that we can get your data from the datastore
          </div>
          }
        </div>
      </div>
    ); 
  }     
  };
  export default Landing;