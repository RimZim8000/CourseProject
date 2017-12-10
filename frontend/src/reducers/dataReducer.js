export default function dataReducer(state = false, action=[]) {
    
    switch (action.type) {
        case 'DATA_READY':
        {
          var retState =  {
              payLoad: action.payLoad
            };
            
          return retState;
        }
        default:
          return state;
      }
    }
  