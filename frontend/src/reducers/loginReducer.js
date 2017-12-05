export default function loginReducer(state = {}, action) {
  var retState = {...state};
  if (action.payLoad != undefined ){
    retState = {
      dataPayload:{...state.dataPayload},
      payLoad: {...action.payLoad}
    }
  };
  if (action.dataPayload != undefined){
    retState = {
      dataPayload: {...action.dataPayload},
      payLoad:{...state.payLoad}
    }
  };
    
  
  switch (action.type) {
      case 'DATA_READY':
        return retState;
      case 'USER_LOGIN':
        return retState;
      default:
        return state;
    }
  }
