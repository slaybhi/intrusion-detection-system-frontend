import React from 'react';
// import Spin from './spin'
var result = {flag:1}
var message = "attack detected. it was an example attack"
const Result = () => {

return <div >
     
     
     
    <div style={{height:`${window.innerHeight-85}px`}}>
                    
                    <div className='message'>
                    {message} 
                    </div>
                
    </div>

    {/* <Spin/> */}

    <div class="page-content" style={{height:`${window.innerHeight-505}px`}}>


    <div class="card">
        <div class="content">
        <h2 class="title">Random Forest</h2>
        <p class="copy">info about random forest</p>
        {/* <button class="btn">View Trips</button> */}
        </div>
    </div>
    <div class="card">
        <div class="content">
        <h2 class="title">logical regression</h2>
        <p class="copy">info about logical regression</p>
        {/* <button class="btn">View Trips</button> */}
        </div>
    </div>
    <div class="card">
        <div class="content">
        <h2 class="title">decision tree</h2>
        <p class="copy">info about decision tree</p>
        {/* <button class="btn">Book Now</button> */}
        </div>
    </div>
    <div class="card">
        <div class="content">
        <h2 class="title">deep learning</h2>
        <p class="copy">info about deep learning</p>
        {/* <button class="btn">Book Now</button> */}
        </div>
    </div>
    </div>
                    
            


</div>
      
};

export default Result;