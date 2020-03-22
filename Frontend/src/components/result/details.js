import React from 'react';

const Details = () => {
    return (
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
                        
    );
};

export default Details;