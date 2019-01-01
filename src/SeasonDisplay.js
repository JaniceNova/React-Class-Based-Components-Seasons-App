import './SeasonDisplay.css';
import React from 'react';
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it's chilly!",
        iconName: "snowflake"
    },

}
const getSeason = (lat, month) => {
 if (month>2 && month<9){
    return lat>0 ? 'summer':'winter'; 

 }
 else {
    return lat>0 ? 'winter':'summer'; 
    
 }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season] //{text, iconName}
  
   
    
    return(
        <div>
        <i  className={`${iconName} icon massive icon-left`} />
        <div><h1 className='text'>{text}</h1></div>
        <i  className={`${iconName} icon massive icon-right`} />
        </div>
    );

};

export default SeasonDisplay;
