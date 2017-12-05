import React, { Component } from "react";
import  {mainStore} from '../mainStore';
import DataCollector from '../Data/getData';
class Dashboard extends Component
{
    render()
    {
        
        return(
            <div>
            <h1>Dash board - data is arrived</h1>
            <h2>Welcome  : mainStore.getState().payLoad</h2>
            <span>
                Arrived Data:
                mainStore.getState().dataPayload
            </span>
            </div>
        );
    }
}

export default Dashboard;