import React from 'react';
var result = {flag:1}
const Result = () => {
    
        if(result.flag===1){
            return <div>
                The attack was detected. It was a example attack.
            </div>
        }
        else{
            return <div>
                No attack where detected.
            </div>
        }
    
};

export default Result;