import React from 'react';

const getSeason = (lat, month) => {
 if (month>2 && month<9){
    return lat>0 ? 'summer':'winter'; 

 }
 else {
     if(a){

     }
     else{

     }
 }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(props.lat);
    return(
      
        <div>Season Display</div>
    );

};

export default SeasonDisplay;
