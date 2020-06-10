import React, { Component } from 'react';
import Filter from '../../filter' 
import {Alert} from 'react-bootstrap'
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";



class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            email_invalid:false,
            wrong_password:false,
            success_login:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    set_state=(state_to_be_set,value)=> {
      this.setState({
        [state_to_be_set]:value
      })
    }
    handleSubmit(e) {
      const pointerToThis=this;  
      e.preventDefault();

       const data={
          email:this.state.email,
          password:this.state.password
        }

        
      
  
      let body_data=JSON.stringify(data);
      var url="http://127.0.0.1:8080/signin"
      var request= {
          method:"POST",
          body:body_data,
          headers:{
              "Content-Type":"application/json",
              'Accept':'application/json',
              "Access-Control-Allow-Origin":"*",
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
        }
      }
console.log("post is working")
    fetch(url,request)
    .then(function(response){
      if(response.status!=200){
        console.log("An error has occured with status code" + response.status)

      }
      else{
        console.log("workingggg")
        response.json().then(function(data){
          var code=data.key;
          console.log(code);
          if(code=='0010'){
            pointerToThis.set_state('email_invalid',true);
            pointerToThis.set_state('wrong_password',false);

          }
          else
              if(code=='0020'){
                pointerToThis.set_state('email_invalid',false);
                pointerToThis.set_state('wrong_password',true);

              }

          else  
              if(code=='0030'){
                pointerToThis.set_state('success_login',true);
                console.log("success")
              }
        });
      }

    })

    .catch(function(error){
      console.log("error:"+ error)
    })

  }

   
   
    render() {
        return (
        <div className="FormCenter">

            <h3>Sign in</h3>
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              
              <div className="FormField">
              <button type="submit" className="FormField__Button mr-20"style={{backgroundColor:'#70bdd6',color:'white'}} onChange={this.handleChange} >Sign In </button> 
              </div>


              {this.state.email_invalid && 
              <Alert variant='warning'>Email doesn't exist, please sign up</Alert>}

              {this.state.wrong_password && 
              <Alert variant='danger'>Incorrect Password</Alert>}


             {this.state.success_login && window.location.replace("/filter")}
            </form>
          
          
          </div>
        );
    }
}

export default SignInForm;