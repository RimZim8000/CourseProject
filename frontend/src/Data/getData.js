import  {mainStore} from '../mainStore';
import React from 'react';
import axios from 'axios';

class DataCollector
{
 getData()
 {
    var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
    console.log('DataCollector:getData() - our data source is ', urlForGetContactData);//urlForGetUserData);
    var myRequest = new Request(urlForGetContactData);
    
    fetch(myRequest)
    .then(response => response.text())      // 1
          .then(json => {                    // 2
               console.log("DataCollector:getData() - typeof json: " + typeof json);
               console.log(json);
               var itemsString= json;
               var items = JSON.parse(itemsString);  
               let payloadData = [...items];
               mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
               
          })
          .catch(error => {                  // 3
           console.log('Error is DataCollector:getData() - ',error);
          });
 }
putData(dataIn)
{
    var myHeaders = new Headers();
    var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
    myHeaders.append('Content-Type', 'application/json');
    var fields = {"id": "101", 
    "first_name": "moloba", 
    "last_name":"talatule",
    "email":"email@email.email",
    "subject": "subject",
    "description": "dataIn.description werwer wer we" };
    var body2str = JSON.stringify(fields);
    console.log(body2str);
    fetch(urlForGetContactData, {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: body2str
    }).then((r) => {
        console.log('post completed', r)
    });
}

deleteData(idIn)
{
  
   // const myRequest = new Request('http://localhost:57708/api/contacts', 
   // {method: 'POST', body: JSON.stringify(body2)});            
   var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
  
    console.log('delete:: idIn = ', idIn)
    var strUrl = urlForGetContactData + '/' + idIn;
   console.log('DataCollector:getData() - our data source is ', strUrl);//urlForGetUserData);
   axios.delete(strUrl)
    .then(function (response) {
         console.log('DataCollector:deleteData() ', response);
         this.getData();// refesh the app with latest data from the datastore
       })
       .catch(function (error) {
         console.log(error);
       });
     
}
 putData3(dataIn)
 {
    var body = {id: dataIn.id, 
      first_name: dataIn.first_name, 
      last_name:dataIn.last_name,
      email:dataIn.email,
      subject: dataIn.subject,
      description: dataIn.description };
      var body2 = {"id": "101", 
        "first_name": "moloba", 
        "last_name":"talatule",
        "email":"email@email.email",
        "subject": "subject",
        "description": "dataIn.description werwer wer we" };
  
    // const myRequest = new Request('http://localhost:57708/api/contacts', 
    // {method: 'POST', body: JSON.stringify(body2)});            
    var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
    var body2str = JSON.stringify(body2);

    console.log('DataCollector:getData() - our data source is ', urlForGetContactData);//urlForGetUserData);
    axios.post(urlForGetContactData, body2str, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          
      }})
     .then(function (response) {
          console.log('DataCollector:putData() ', response);
          this.getData();// refesh the app with latest data from the datastore
        })
        .catch(function (error) {
          console.log(error);
        });
      
 }

putDataWithFetch(dataIn)
 {
    var body = {id: dataIn.id, 
      first_name: dataIn.first_name, 
      last_name:dataIn.last_name,
      email:dataIn.email,
      subject: dataIn.subject,
      description: dataIn.description };
      var body2 = {id: "101", 
        first_name: "moloba", 
        last_name:"talatule",
        email:"email@email.email",
        subject: "subject",
        description: "dataIn.description werwer wer we" };
  
    const myRequest = new Request('http://localhost:57708/api/contacts', 
    {method: 'POST', body: JSON.stringify(body2)});            
    
    fetch(myRequest)
    .then(response => response.text())      // 1
          .then(json => {                    // 2
               console.log("DataCollector:putData() - typeof json: " + typeof json);
               console.log(json);
               this.getData();// refesh the app with latest data from the datastore
          })
          .catch(error => {                  // 3
           console.log('Error is DataCollector:putData() - ',error);
          });
 }
 
}

export default DataCollector;