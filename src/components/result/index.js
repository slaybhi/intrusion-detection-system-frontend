import React from 'react';
import Card from './card'
var result = {flag:1}
var message = "attack detected. it was an example attack"
const Result = () => {

            return <div style={{height:`${window.innerHeight-85}px`}}>
                {message}
            <div className='cards-collection'>
                <div className='jiggle card'><Card name='Decision tree' bck='https://static.vecteezy.com/system/resources/previews/000/271/825/non_2x/springtime-tree-vector-illustration.jpg'></Card></div>
                <div className='jiggle card'><Card name='Logistic Regression' bck='http://chanakya.ca/wp-content/uploads/2018/05/logistic-regression-example-e1527081563263.jpg'></Card></div>
                <div className='jiggle card'><Card name='Random forest' bck='https://previews.123rf.com/images/vectoroksana/vectoroksana1909/vectoroksana190900901/129538609-blue-line-trees-icon-isolated-on-white-background-forest-symbol-abstract-circle-random-dots-vector-i.jpg'></Card></div>
                <div className='jiggle card'> <Card name='Bayes clustering' bck='https://i.ya-webdesign.com/images/learning-vector-artificial-intelligence-12.png'></Card></div>
                <div className='jiggle card'><Card name='Deep learning' bck='https://image.flaticon.com/icons/png/512/2043/2043014.png'></Card></div>    
            </div>
                
        


            </div>
      
};

export default Result;