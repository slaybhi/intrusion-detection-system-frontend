import React from 'react';

const Details = () => {
    return (
        <div class="page-content" style={{height:`${window.innerHeight-505}px`}}>


        <div class="card">
            <div class="content">
            <h2 class="title">Random Forest</h2>
            <p class="copy">Accuracy: 98.6</p>
            {/* <button class="btn">View Trips</button> */}
            </div>
        </div>
        <div class="card">
            <div class="content">
            <h2 class="title">KNN</h2>
            <p class="copy">Accuracy: 97.1%</p>
            {/* <button class="btn">View Trips</button> */}
            </div>
        </div>
        <div class="card">
            <div class="content">
            <h2 class="title">decision tree</h2>
            <p class="copy">Accuracy: 98.2%</p>
            {/* <button class="btn">Book Now</button> */}
            </div>
        </div>
        <div class="card">
            <div class="content">
            <h2 class="title">deep learning</h2>
            <p class="copy">Accuracy: 99.99%</p>
            {/* <button class="btn">Book Now</button> */}
            </div>
        </div>
        <div class="card">
            <div class="content">
            <h2 class="title">SVM</h2>
            <p class="copy">Accuracy: 86.6%</p>
            {/* <button class="btn">Book Now</button> */}
            </div>
        </div>
        <div class="card">
            <div class="content">
            <h2 class="title">Naive Bayes</h2>
            <p class="copy">69.4%</p>
            {/* <button class="btn">Book Now</button> */}
            </div>
        </div>
        </div>
                        
    );
};

export default Details;