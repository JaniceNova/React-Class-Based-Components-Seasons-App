import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
   //anytime we update our state object our render method runs
   
    constructor(props){
        //super says that we want to keep the react.Component constructor stuff
        super(props);
// this is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: '' };
    
        window.navigator. geolocation.getCurrentPosition(
            (position)=> {
                this.setState({lat : position.coords.latitude});
            },
            (err)=> {
                 this.setState({errorMessage: err.message});
                }
        ); 
    }
    //react says we have to define reder!!
    //render method gets called all the dang time
    render(){
       
        return( 
        <div> Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
         </div>
   );
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);