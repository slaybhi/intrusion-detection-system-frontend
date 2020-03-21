import React, { Component } from 'react';
import Signin from '../login/signin';
import Signup from '../login/signup'
class Home extends Component {
    render() {
        return (
            <div  className='container-fluid background'>
                 <div className='lefthalf'></div>
                <div className='righthalf'></div>
                <div className = 'bck-logo'></div>

               <div className='grid-container row'>
                    <Signup className='col-md-6'/>
                    <Signin className='col-md-6'/>
                </div>
            </div>  
        );
    }
}

export default Home;