import React from 'react';
import Details from './details';
import {scroller,Element} from 'react-scroll';
var result = {flag:1}
var message = "attack detected. it was an example attack"
const Result = () => {


    const scrolltoelement = (element) =>{
        scroller.scrollTo(element,{
            duration:1500,
            delay: 100,
            smooth:true
        });
    }


return <div >

    <div style={{height:`${window.innerHeight-85}px`}}>
                    
                    <div className='message'>
                    {message} 
                    </div>
                   
                   <div className='button-details'>
                    <div className='scroll-down' onClick={()=>scrolltoelement('details')}></div>
                    
                    </div>
    </div>

    <Element name='details'>
    <Details />
    </Element>
            
    <button >Sign Out</button>

</div>
      
};

export default Result;