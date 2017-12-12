import  {mainStore} from '../mainStore';
import React from 'react';
import axios from 'axios';


export function getDataFromDB()
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

 export function putData(dataIn)
{
    var dataToSave = {id: dataIn.id, 
        first_name: dataIn.first_name, 
        last_name:dataIn.last_name,
        email:dataIn.email,
        subject: dataIn.subject,
        description: dataIn.description };
    var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
    
    console.log('put:: dataToSave.id = ', dataToSave.id)
    var strUrl = urlForGetContactData + '/' + dataToSave.id;
    console.log('put:: url = ', strUrl);
    console.log('put:: dataToSave = ', dataToSave);
    axios.put(strUrl, dataToSave)
    .then(function (response) {
         console.log('DataCollector:putData() ', response);
         //mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
         getDataFromDB();// refesh the app with latest data from the datastore
       })
       .catch(function (error) {
            //mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
            console.log(error);

       });
     
}

export function deleteData(idIn)
{
   var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
   console.log('delete:: idIn = ', idIn)
   var strUrl = urlForGetContactData + '/' + idIn;
   console.log('delete:: url = ', strUrl);
   axios.delete(strUrl)
    .then(function (response) {
         //console.log('DataCollector:deleteData() ', response);
     getDataFromDB();// refesh the app with latest data from the datastore
       })
       .catch(function (error) {
         console.log(error);
       });
     
}
export function postData(dataIn)
 {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
      var dataToSave = {id: uniqid, 
      first_name: dataIn.first_name, 
      last_name:dataIn.last_name,
      email:dataIn.email,
      subject: dataIn.subject,
      description: dataIn.description };
      
    var strUrl = process.env.REACT_APP_DATASOURCE_CONTACTS;
    console.log('post:: url = ', strUrl);
    console.log('post:: dataToSave = ', dataToSave);
    axios.post(strUrl, dataToSave)
     .then(function (response) {
          console.log('DataCollector:postData() ', response);
      getDataFromDB();// refesh the app with latest data from the datastore
        })
        .catch(function (error) {
          console.log(error);
        });
      
 }

 export function putDataWithFetch(dataIn)
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
               getDataFromDB();// refesh the app with latest data from the datastore
          })
          .catch(error => {                  // 3
           console.log('Error is DataCollector:putData() - ',error);
          });
 }
 


export default getDataFromDB;