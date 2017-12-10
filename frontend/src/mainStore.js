import { createStore } from 'redux';
import {combineReducers} from 'redux';
// import { reducer as reduxForm } from ';
import reducers from './reducers';
import _ from 'underscore';
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

export function isDataActive()
{
    if (mainStore.getState().data.payLoad !== undefined
    && mainStore.getState().data !== null
    && mainStore.getState().data !== false
    && mainStore.getState().data.payLoad !== false )
    {
        return true;
    }
    return false;
}

export function getData()
{
    if (mainStore.getState().data.payLoad !== undefined
    && mainStore.getState().data !== null
    && mainStore.getState().data !== false
    && mainStore.getState().data.payLoad !== false )
    {
        let payloadData = mainStore.getState().data.payLoad;
        // console.log('in mainStore:getData - payloadData  = ', payloadData);
        // console.log('in mainStore:getData - payloadData is an array of JSON objects. its length is  = ', payloadData.length);
        // console.log('in mainStore:getData - payloadData[0] is a JSON object. it is  = ', payloadData[0]);
        return mainStore.getState().data.payLoad;
    }
    return false;
}

export function getIDfromRowID(tempRowID)
{
    var nRetID =  0;
    if  ( isDataActive()) 
    {
        var data  = mainStore.getState().data.payLoad;
        nRetID = _.findLastIndex(data, {
        id: tempRowID
      });
      for(var i=0; i < data.length; i++)
      {
          if (data.id == tempRowID)
          nRetID =i;
          break;
      }
    }
    return ((nRetID <0) ? 0 :nRetID);
}