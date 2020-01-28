import React, { Component } from 'react';

class Home extends Component {
    render() {
        console.log(window.innerHeight)
        return (
            <div style={{height:`${window.innerHeight-85}px`}}>
                <div className='lefthalf'></div>
                <div className='righthalf'></div>
                <div className = 'bck-logo'></div>
                
                <div style={{fontSize:'40px'}}>
                    <br/>
                <a href='http://localhost:3000/test'> <button > Test</button> </a>
                </div>
            </div>  
        );
    }
}

export default Home;