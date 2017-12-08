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

export function isUserAuthenticated()
{
    if (mainStore.getState().login !== null &&
        mainStore.getState().login !== undefined &&
        mainStore.getState().login !== false &&
        mainStore.getState().login.payLoad !== null &&
        mainStore.getState().login.payLoad !== undefined &&
        mainStore.getState().login.payLoad !== '' &&
        mainStore.getState().login.payLoad !== false )
        {
            return true;
        }
    return false;
}

export function getUserName()
{
    if (mainStore.getState().login !== null &&
        mainStore.getState().login !== undefined &&
        mainStore.getState().login !== false &&
        mainStore.getState().login.payLoad !== null &&
        mainStore.getState().login.payLoad !== undefined &&
        mainStore.getState().login.payLoad !== '' &&
        mainStore.getState().login.payLoad !== false )
        {
            return mainStore.getState().login.payLoad.name;
        }
    return '';
}

// export function isDataActive()
// {
    // if (mainStore.getState().login.payLoad !== undefined
    // && mainStore.getState().login !== null
    // && mainStore.getState().login !== false
    // && mainStore.getState().login.payLoad !== false )
//     {
//         return true;
//     }
//     return false;
// }