import React, { Component } from 'react';
// import '../AddItem.css';
import  {mainStore,isDataActive, getData, getIDfromRowID} from '../mainStore';
// import firebase, { auth, provider } from '../firebase.js';


export class AddItem extends Component{
    constructor(props)
    {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     // this.onAuthStateChanged = this.processLogIn.bind(this);
      this.state = {
        currentItem: props.currentItem,
        username: props.username,
        items: props.items,
        user: props.user
      }
    }
    processLogIn(result) {this.setState({props:result.user});};
    componentWillMount () {
      //auth.onAuthStateChanged((userIn) => {this.setState({user:userIn });});
      //this.populateListWithItemsFromDB();
    }
    insertItemIntoDB(){
      // const itemsRef = firebase.database().ref('items');
      // const item = {
      //   title: this.state.currentItem,
      //   user: this.state.user.displayName || this.state.user.email
      // }
      // itemsRef.push(item);
      // this.setState({currentItem: '', username: ''});
    }
    handleSubmit(e) {
      e.preventDefault();
      //this.insertItemIntoDB();
    }
    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    renderComponent( dataId)
    {
      console.log('AddItem:renderComponent(): this.props.dataId ', dataId);
      var tempRowID = (dataId !== undefined) ? dataId :0;
      var row = tempRowID;//getIDfromRowID(tempRowID);
      console.log ('AddItem:renderComponent(): selected row = ', row);
      console.log ('AddItem:renderComponent(): data  = ', 
            (isDataActive()  && getData()[row] !== null && getData()[row] !== undefined ) 
            ? getData()[row] : 'Data is not available');
      
      if(isDataActive()  && getData()[row] !== null && getData()[row] !== undefined )
      {
        return (
        <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" style={{width:'50%'}} name="first_name" placeholder="First Name" 
                onChange={this.handleChange} 
                value={(isDataActive()  && getData()[row] !== undefined) ?  getData()[row].first_name : 'first_name data is not available'} />
              <input type="text" style={{width:'50%'}} name="last_name" placeholder="Last Name" 
                onChange={this.handleChange} 
                value={(isDataActive() ) ?  getData()[row].last_name : 'last_name data is not available'} />
                <input type="text" name="email" placeholder="Email" 
                onChange={this.handleChange} 
                value={(isDataActive() ) ?  getData()[row].email : 'email data is not available'} />
                <input type="text" name="subject" placeholder="Subject" 
                onChange={this.handleChange} 
                value={(isDataActive() ) ?  getData()[row].subject : 'subject data is not available'} />
                <input type="textarea" rows="3" name="Description" placeholder="Description" 
                onChange={this.handleChange} 
                value={(isDataActive() ) ?  getData()[row].description : 'description data is not available'} />
                <a className='btn-floating btn-flat red'> <i className='material-icons'>+</i></a>
            </form>
        </section>
        )
      }
      else
      {
        return (
          <div>
            <h3>Data hasn't available</h3>
          </div>
        )
      }
    }
    render(dataId){
      return (
        this.renderComponent(this.props.dataId)
      );
    };
  }
  export default AddItem;