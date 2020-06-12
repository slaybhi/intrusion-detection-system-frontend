import React from 'react';

const Details = () => {
    return (
        <div className="page-content" style={{height:`${window.innerHeight-505}px`}}>


        <div className="card">
            <div className="content">
            <h2 className="title">Random Forest</h2>
            <p className="copy">Accuracy(With all feeatures selected): 70.3%</p>
            <p className="copy">Accuracy(With some feeatures selected): 74.0%</p>
            {/* <button className="btn">View Trips</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">KNN</h2>
            <p className="copy">Accuracy: 48.0%</p>
            {/* <button className="btn">View Trips</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">decision tree</h2>
            <p className="copy">Accuracy(With all feeatures selected): 67.3%</p>
            <p className="copy">Accuracy(With some feeatures selected): 72.2%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">deep learning</h2>
            <p className="copy">Accuracy: 78.2%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">SVM</h2>
            <p className="copy">Accuracy: 20.2%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
            <h2 className="title">Naive Bayes</h2>
            <p className="copy">10.9%</p>
            {/* <button className="btn">Book Now</button> */}
            </div>
        </div>
        </div>
                        
    );
};

export default Details;