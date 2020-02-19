import React from 'react';

const Card =(props) =>{
    return (
        <div className="card_wrapper">
            <div 
                className="card_thmb"
                style={{background:`#f2f9ff url(${props.bck})`}}
            ></div>
            <div className="card_info">
                
                <div className="card_name">
                    <span ><b>{props.name}</b></span>
                </div>
            </div>
        </div>
    );
};

export default Card;