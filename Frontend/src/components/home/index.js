import React, { Component } from 'react';
import Signin from '../login/signin';
import Signup from '../login/signup'
class Home extends Component {
    render() {
        return (
            <div  className='container-fluid'>
                
               <div className='grid-container row'>
               <div className='lefthalf'></div>
                <div className='righthalf'></div>
                <div className = 'bck-logo'></div>
                    <Signup className='col-md-6'/>
                    <Signin className='col-md-6'/>
                </div>
            </div>  
        );
    }
}

export default Home;