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
    var urlForGetUserData = process.env.REACT_APP_DATASOURCE_USERS;
    console.log('our data source is ', urlForGetUserData);
    var myRequest = new Request(urlForGetUserData);
    
    fetch(myRequest)
    //fetch('http://courseprojectdatasource2017.azurewebsites.net/api/items')
    .then(response => response.text())      // 1
          .then(json => {                    // 2
               console.log("typeof json: " + typeof json);
               console.log(json);
               var itemsString= json;
               
               var items = JSON.parse(itemsString);  
               let newState = [...items];
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
               mainStore.dispatch({type: 'DATA_READY',payLoad:newState});
               
          })
          .catch(error => {                  // 3
           console.log(error);
          });
 }
}

export default DataCollector;