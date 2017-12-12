import  {mainStore} from '../mainStore';

import axios from 'axios';


export function getDataDB()
 {
    var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
    console.log('DataCollector:getData() - our data source is ', urlForGetContactData);//urlForGetUserData);
    var myRequest = new Request(urlForGetContactData);
    console.log('........ Data gathering started - just before fetch(myRequest) in the function getDataFromDB()........');
    console.log('########################### Data gathering started  at - ', Date.now());
    axios.get(urlForGetContactData)
    .then(function(response)      // 1
          {                    // 2
            var json = response.data;
            console.log('########################### Data gathering Ended  at - ', Date.now());
            console.log('........ Data has arrived from DB - just after .then(json => in the function getDataFromDB()........');
            console.log("getDataDB() - typeof json: " + typeof json);
               console.log(json);
               
               var items = json;  
               let payloadData = [...items];
               mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
               
          })
          .catch(error => {                  // 3
           console.log('Error is getDataDB() - ',error, ' time is - ', Date.now() );
          });
 }

 export function putDataDB(dataIn)
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
    console.log('Axios:put:: started with dataToSave = ', dataToSave, ' time is - ', Date.now() );
    axios.put(strUrl, dataToSave)
    .then(function (response) {
         console.log('DataCollector:putData() ', response, ' time is - ', Date.now() );
         //mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
         getDataDB();// refesh the app with latest data from the datastore
       })
       .catch(function (error) {
            //mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
            console.log('putDataDB   ', error, ' time is - ', Date.now() );

       });
     
}

export function deleteDataDB(idIn)
{
   var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
   console.log('delete:: idIn = ', idIn)
   var strUrl = urlForGetContactData + '/' + idIn;
   console.log('Axios: delete started with url = ', strUrl, ' time is - ', Date.now() );
   axios.delete(strUrl)
    .then(function (response) {
            console.log('deleteDataDB() completed '
            , response, ' time is - ', Date.now() );
            getDataDB();// refesh the app with latest data from the datastore
       })
       .catch(function (error) {
         console.log('deleteDataDB  ',error , ' time is - ', Date.now() );
       });
     
}
export function postDataDB(dataIn)
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
    console.log('Axios post started with dataToSave = ', dataToSave, ' time is - ', Date.now() );
    axios.post(strUrl, dataToSave)
     .then(function (response) {
            console.log('postDataDB() completed with response= ', response, ' time is - ', Date.now() );
            getDataDB();// refesh the app with latest data from the datastore
        })
        .catch(function (error) {
          console.log('postDataDB()  ', error, ' time is - ', Date.now() );
        });
      
 }

 
export default getDataDB;