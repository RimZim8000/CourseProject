export default function dataReducer(state = false, action=[]) {
    
    switch (action.type) {
        case 'DATA_READY':
        {
          // var newpayLoad = [];
          // var items = action.payLoad;
          //payLoad: [...action.payLoad];
          // for (let item in items) {
          //   //  console.log(items[item].title);
          //   //  console.log(items[item].user);
          //    newpayLoad.push({
          //      id: item,
          //      title: items[item].title,
          //      user: items[item].user
          //    });
          //   }
          var retState =  {
              //payLoad: [...action.payLoad]
              payLoad: action.payLoad
            };
            
          return retState;
        }
        default:
          return state;
      }
    }
  