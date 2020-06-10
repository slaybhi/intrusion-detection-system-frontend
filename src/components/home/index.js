import React, { Component } from 'react';
import Signin from '../login/signin';
import Signup from '../login/signup'
class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div  className='container-fluid background'>
                 <div className='lefthalf'></div>
                <div className='righthalf'></div>
                <div className = 'bck-logo'></div>

               <div className='grid-container row'>
                    <Signup className='col-md-6' {...this.props}/>
                    <Signin className='col-md-6' {...this.props}/>
                </div>
            </div>  
        );
    }
}

export default Home;