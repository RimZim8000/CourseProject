import React, {Component} from 'react';
import  {mainStore, getDataFromMainStore, isDataActive,  isUserAuthenticated} from '../mainStore';
import AddItem from './AddItem';
import { Link } from "react-router-dom";
import _ from 'underscore';
class Landing extends Component { 
  componentWillMount()
  {
    console.log('Landing:componentWillMount(): this.props.params.id '
      , this.props.match.params.id, ' time is - ', Date.now());
  }
  getGridRows(arrayOfJSONObjects)
  {
    console.log('Landing:getGridRows(): this.props.location '
      , this.props.location, ' time is - ', Date.now());
    var mykeys = _.values(arrayOfJSONObjects);
    console.log('Landing: getGridRows(arrayOfJSONObjects) - mykeys.length'
      , mykeys.length, ' time is - ', Date.now());
    var retArrayOfRows = [];
    for (var i=0; i < arrayOfJSONObjects.length; i++)
    {
      var row = _.mapObject(arrayOfJSONObjects[i], function(val, key) {
        
      return (<td style={{overflow:'hidden',whiteSpace:'nowrap'}}>{val}</td>);
      });
      var values = _.values(row);

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
    console.log("Landing extends Component: table row clicked event info (i) is = "
      , i , "   an e is ", e, ' time is - ', Date.now());
    
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
    //className='blueTable'// class="bordered highlight responsive-table"style={{overflowY:'auto', border:'1px solid lightgrey'}
    myRenderData() {
        return ( 
        <div>
          {(isUserAuthenticated() && isDataActive()) 
          ?
          <div>
          <table style={{ height: '200px', width:'98%', display: 'block', overflowY: 'scroll'}}>
          
          <tbody >
          <tr>{this.getGridHeaders(getDataFromMainStore())} </tr>
            {this.getGridRows(getDataFromMainStore())}
            </tbody>
          </table> 
          </div>
          : '.... So that we can get your data from the datastore'
          }
        </div>
        );
    }
    render(){
      console.log('in Landing:render(): this.props.location ', this.props.location, ' time is - ', Date.now());
      
    return (
      <div className='myContainer' style={{border:'1px solid lightgrey'}}>
        <div>
        <h5>Welcome to the CourseProject 2017  </h5>
          <h5>
          { (isUserAuthenticated() && isDataActive()) ? 'Hello, ' + mainStore.getState().login.payLoad.name 
                              : 'Please login using your Google Account' } 
          </h5>
        </div>
        <div >
          {(isUserAuthenticated() && isDataActive()) ?
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