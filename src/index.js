import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingScreen from './LoadingScreen';

class App extends React.Component {
   //anytime we update our state object our render method runs
   
 
    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({lat : position.coords.latitude}),
            (err)=> this.setState({errorMessage: err.message})
        ); 
      
    }

    componentDidUpdate(){
        console.log('My component was just updated -it reredered!');

    }
    //react says we have to define reder!!
    //render method gets called all the dang time
renderContent (props){
    if(this.state.errorMessage &&!this.state.lat){
        return( 
        <div>
        Error: {this.state.errorMessage}
        </div>
        );
       }
       else if (this.state.lat && !this.state.errorMessage){
        return( 
          <SeasonDisplay lat={this.state.lat} />

        );
       }
       else {
        return( 
           <LoadingScreen message="Please accept location request" />
        );
       }
}

    render(){
     
        return( 
            <div>{this.renderContent()}</div>
        );
       
}
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);