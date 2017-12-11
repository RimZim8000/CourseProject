import React, { Component } from 'react';
import  {mainStore,isDataActive, getData,  getIDfromRowID} from '../mainStore';
import DataCollector from '../Data/getData';

export class AddItem extends Component{
    constructor(props)
    {
      super(props);
      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
      // this.onAuthStateChanged = this.processLogIn.bind(this);
      var tempRow = (props.dataId !== undefined) ? props.dataId :0;
      var data = getData()[tempRow];
      var temp = [];
      if (isDataActive()  && data !== null && data !== undefined )
      {
          this.state = {
            row:props.dataId,
            id: data.id,
            first_name: data.first_name,
            last_name:data.last_name,
            email:data.email,
            subject:data.subject,
            description:data.description
          }
        }
        else
        {
          this.state = {
            row:props.dataId,
            id:props.dataId,
            first_name: '',
            last_name:'',
            email:'',
            subject:'',
            description:''
          }      
        }
      }

    processLogIn(result) {this.setState({props:result.user});};
    componentWillMount () {
      var tempRow = (this.props.dataId !== undefined) ? this.props.dataId :0;
      var data = getData()[tempRow];
      if (this.state.row !== tempRow)
      {
        this.setState({row: tempRow});
        this.setState({id: data.id});
        this.setState({first_name: data.first_name});
        this.setState({last_name: data.last_name});
        this.setState({email: data.email});
        this.setState({subject: data.subject});
        this.setState({description: data.description});
      }
      //auth.onAuthStateChanged((userIn) => {this.setState({user:userIn });});
      //this.populateListWithItemsFromDB();
    }
    insertItemIntoDB(){
      let d = new DataCollector();
      d.putData(this.state);
    }

    handleDelete(rowIn, e) {
      e.preventDefault();
      var data = getData()[rowIn];
      let d = new DataCollector();
      d.deleteData(data.id);
      this.setState({id: data.id});
    }

    handleUpdate(e) {
      e.preventDefault();
      this.insertItemIntoDB();
    }

    handleSave(e) {
      e.preventDefault();
      //this.insertItemIntoDB();
    }
    handleChange(rowIn,e) {
      this.setState({[e.target.name]: e.target.value});
      this.setState({row: rowIn});
      var data = getData()[rowIn];
      this.setState({id: data.id});
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
       var data =  getData()[row];
  
      if(isDataActive()  &&  data !== null && data !== undefined )
      {
        var f = this.state.first_name;
        var l = this.state.last_name;
        var e = this.state.email;
        var s = this.state.subject;
        var d = this.state.description;
        if (row !== this.state.row ){ 
          f = data.first_name;
          l = data.last_name;
          e = data.email;
          s = data.subject;
          d = data.description;
        }     
        return (
        <section style={{border:'1px solid black'}}>
            <form onSubmit={this.handleSubmit}>
                
                <label for="first_name" style={{width:'10%'}} >First Name:  </label>
                <input id='first_name' type="text" style={{width:'40%'}} name="first_name" 
                  placeholder='First Name'
                  onChange={this.handleChange.bind(this,row)} 
                  value={f}
                   />
                
                <label for="last_name" style={{width:'10%'}} >Last Name:  </label>
                <input id='last_name' type="text" style={{width:'40%'}} name="last_name" 
                   placeholder='Last Name'
                   onChange={this.handleChange.bind(this,row)} 
                    value={l}
                   />
                <br/>
                <label for="email" style={{width:'10%'}} >Email:  </label>
                <input id="email" style={{width:'90%'}}  type="text" name="email" 
                   placeholder='Email'
                   onChange={this.handleChange.bind(this,row)} 
                   value={e}                
                   />
                <br/>
                <label for="subject">Subject:  </label>
                <input id="subject" type="text" name="subject" 
                   placeholder="Subject :" 
                   onChange={this.handleChange.bind(this,row)} 
                   value={s}
                />
                
                <label for="description">Description:  </label>
                <textarea id="description"  rows="3" name="description" 
                  placeholder="Description" 
                  onChange={this.handleChange.bind(this,row)} 
                  value={d}
               />
              <button style={{margin:'10px'}} 
                className="btn waves-effect waves-light" 
                onClick={this.handleUpdate.bind(this)}
                type="button" name="Update">Update</button>
              
              <button style={{margin:'10px'}} 
                className="btn waves-effect waves-light" 
                type="button" name="CreateNew">Create New</button>
              
              <button style={{margin:'10px'}} 
                className="btn waves-effect waves-light" 
                onClick={this.handleDelete.bind(this, row)}
                type="button" name="Delete">Delete</button>
              </form>
        </section>
        )
      }
      else
      {
        return (
          <div>
            <h3>Data is not available</h3>
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