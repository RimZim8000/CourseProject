import { createStore } from 'redux';
import {combineReducers} from 'redux';
// import { reducer as reduxForm } from ';
import reducers from './reducers';

export var mainStore;
export default function initiateMainStore()
{
    mainStore = createStore(reducers);
    return mainStore;
}

export function getMainStore() 
{ 
    return mainStore;
}
 
