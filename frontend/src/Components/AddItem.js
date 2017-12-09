import React, { Component } from 'react';
// import '../AddItem.css';
import  {mainStore} from '../mainStore';
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
    render(){
      return (
          <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" style={{width:'50%'}} name="first_name" placeholder="First Name" 
                onChange={this.handleChange} value={this.state.currentItem} />
              <input type="text" style={{width:'50%'}} name="last_name" placeholder="Last Name" 
                onChange={this.handleChange} value={this.state.currentItem} />
                <input type="text" name="email" placeholder="Email" 
                onChange={this.handleChange} value={this.state.currentItem} />
                <input type="text" name="subject" placeholder="Subject" 
                onChange={this.handleChange} value={this.state.currentItem} />
                <input type="text" name="Description" placeholder="Description" 
                onChange={this.handleChange} value={this.state.currentItem} />
              <button>Add Item</button>
            </form>
        </section>
      );
    };
  }
  export default AddItem;