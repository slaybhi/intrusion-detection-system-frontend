import React, { Component } from 'react';
import Signin from '../login/signin';
import Signup from '../login/signup'
class Home extends Component {
    render() {
        return (
            <div style={{height:`${window.innerHeight-85}px`}}>
                <div className='lefthalf'></div>
                <div className='righthalf'></div>
                <div className = 'bck-logo'></div>
               <div className='grid-container'>
                <Signup className='item1'/>
                <Signin className='item2'/>
                </div>
                <div style={{fontSize:'40px'}}>
                    <br/>
                
                </div>
            </div>  
        );
    }
}

export default Home;