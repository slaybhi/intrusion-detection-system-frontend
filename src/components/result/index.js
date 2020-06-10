import React from 'react';
import Details from './details';
import {scroller,Element} from 'react-scroll';
var result = {flag:1}
// var message = "Attack detected. It was an example attack"
const Result = (props) => {

    var message = props.location.state.message;
    
    const scrolltoelement = (element) =>{
        scroller.scrollTo(element,{
            duration:1500,
            delay: 100,
            smooth:true
        });
    }


return <div >

    <div style={{height:`${window.innerHeight-85}px`}}>
                    
                    <div className='message typewriter'>
                    <h1>{message} </h1>
                    </div>
                   
                   <div className='button-details'>
                    <div className='scroll-down' onClick={()=>scrolltoelement('details')}></div>
                    
                    </div>
    </div>

    <Element name='details'>
    <Details />
    </Element>

    <button className='btn-result-signout' >Sign Out</button>

</div>
      
};

export default Result;