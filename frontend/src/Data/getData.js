import  {mainStore} from '../mainStore';

class DataCollector
{
 getData()
 {
    fetch('http://couseproject2017datasource.azurewebsites.net/api/items')
    .then(response => response.text())      // 1
          .then(json => {                    // 2
               console.log("typeof json: " + typeof json);
               console.log(json);
               var itemsString= json;
               let newState = [];
               var items = JSON.parse(itemsString);  
               for (let item in items) {
                 console.log(items[item].title);
                 console.log(items[item].user);
                 newState.push({
                   id: item,
                   title: items[item].title,
                   user: items[item].user
                   
                 });
               }
               mainStore.dispatch({type: 'DATA_READY',dataPayload:newState});
               
          })
          .catch(error => {                  // 3
           console.log(error);
          });
 }
}

export default DataCollector;