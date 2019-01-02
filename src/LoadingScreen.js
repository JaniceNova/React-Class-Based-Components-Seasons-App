import './SeasonDisplay.css';
import React from 'react';



const LoadingScreen = (props) => {
    return(
        <div className="ui segment loadingScreen">
        <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
        </div>
             <p></p>
        </div>
    );
};

export default LoadingScreen;