import React from 'react';

const Details = () => {
    return (
        <div className="page-content" style={{height:`${window.innerHeight-505}px`}}>


        <div className="card">
            <div className="content">
            <h2 className="title">Random Forest</h2>
            <p className="copy">Accuracy: 98.6</p>
            {/* <button className="btn">View Trips</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">KNN</h2>
            <p className="copy">Accuracy: 97.1%</p>
            {/* <button className="btn">View Trips</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">decision tree</h2>
            <p className="copy">Accuracy: 98.2%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">deep learning</h2>
            <p className="copy">Accuracy: 99.99%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">SVM</h2>
            <p className="copy">Accuracy: 86.6%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">Naive Bayes</h2>
            <p className="copy">69.4%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        </div>
                        
    );
};

export default Details;