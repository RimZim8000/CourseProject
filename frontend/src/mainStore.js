import { createStore } from 'redux';
import loginReducer from './reducers/loginReducer';

export var mainStore;
export default function initiateMainStore()
{
    mainStore = createStore(loginReducer);
    return mainStore;
}

export function getMainStore() 
{ 
    return mainStore;
}
 
