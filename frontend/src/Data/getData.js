import  {mainStore} from '../mainStore';

class DataCollector
{
 getData()
 {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'appplication/json');
    
    var myInit = { method: 'GET',
                  //body: '{"id":"1"}',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default' };
    //var myRequest = new Request(urlForData,myInit);
    var urlForGetContactData = process.env.REACT_APP_DATASOURCE_CONTACTS;
    var urlForGetUserData = process.env.REACT_APP_DATASOURCE_USERS;
    console.log('DataCollector:getData() - our data source is ', urlForGetContactData);//urlForGetUserData);
    var myRequest = new Request(urlForGetContactData);//(urlForGetUserData);
    
    fetch(myRequest)
    //fetch('http://courseprojectdatasource2017.azurewebsites.net/api/items')
    .then(response => response.text())      // 1
          .then(json => {                    // 2
               console.log("DataCollector:getData() - typeof json: " + typeof json);
               console.log(json);
               var itemsString= json;
               
               var items = JSON.parse(itemsString);  
            //    console.log('DataCollector:getData() - incoming string is = ', itemsString);
            //    console.log('DataCollector:getData() - parsed JSON is = ', items);
               let payloadData = [...items];
            //    console.log('DataCollector:getData() - items JSON is copied to payloadData  = ', payloadData);
            //    console.log('DataCollector:getData() - the payloadData is an array of JSON objects. its length is  = ', payloadData.length);
            //    console.log('DataCollector:getData() - payloadData[0] is a JSON object. it is  = ', payloadData[0]);
              //  for (let item in items) {
              //   //  console.log(items[item].title);
              //   //  console.log(items[item].user);
              //    newState.push({
              //      id: item,
              //      title:items[item].title,
              //      user:items[item].user
              //     //  displayname: items[item].displayname,
              //     //  email: items[item].email,
              //     //  googleid: items[item].googleid
                   
              //    });}
               mainStore.dispatch({type: 'DATA_READY',payLoad:payloadData});
               
          })
          .catch(error => {                  // 3
           console.log('Error is DataCollector:getData() - ',error);
          });
 }
}

export default DataCollector;