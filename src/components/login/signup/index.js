import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'



class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            name:'',
            password: '',
            email: '',
          email_exist:false,
          signup_success:false
           
        };

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

    set_state=(state_to_be_set,value) => {
      this.setState({
        [state_to_be_set]:value
      })
    }

    handleSubmit(e) {
      e.preventDefault();
     
        const {password,email_exist}=this.state;
      const pointerToThis=this;

        const data={
          name:this.state.name,
          password:this.state.password,
          email:this.state.email,
          
        }

  
       
        let body_data=JSON.stringify(data);
        var url='http://127.0.0.1:8080/signup';
        var request={
          method:"POST",
          body:body_data,
          headers:{
            "Content-Type": "application/json",
				    "Access-Control-Allow-Origin": "*",
				    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
          }
        }
        fetch(url,request)
        .then(function(response){
          if(response.status!==200){
            console.log("An error has occured with code" + response.status);

          }
          else{
            response.json().then(function(data){
              if(data.key==='0040'){
                pointerToThis.set_state('email_exist',true);
                }
              else
              if(data.key==='0050'){
                pointerToThis.set_state('email_exist',false);
                pointerToThis.set_state('signup_success',true);
              }

            })
          }
        })
        .catch(function(error){
          console.log("error"+error);
        })
      
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
  
    render() {
        return (
        <div className="FormCenter1" >
          <h3>SignUp</h3>
            <form onSubmit={this.handleSubmit} className="FormField1">
              <div className="FormField1">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" required value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField1">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" required value={this.state.password} onChange={this.handleChange} />
              </div>
              
              <div className="FormField1">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" required value={this.state.email} onChange={this.handleChange} />
              </div>
              
              <div className="FormField1">
                  <button className="FormField__Button mr-20" variant="success" type="submit" onClick={this.handleSubmit} >Sign Up</button> 
              </div>


        

        {
          this.state.email_exist && 
          <Alert variant="danger" >Email Id Already exists</Alert>
        }


        {
          this.state.signup_success && 
          <Alert variant="success" id='success-signup'><h4><Alert.Heading>Account created successfully</Alert.Heading></h4></Alert>
        }
            </form>
          </div>

        );
    }
}

export default SignUpForm;