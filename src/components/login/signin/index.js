import React, { Component } from 'react';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        // <a href='http://localhost:3000/test'> 
        window.location.href = "http://localhost:3000/test";

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
              <button className="FormField__Button mr-20"style={{backgroundColor:'#70bdd6',color:'white'}} >Sign In </button> 
              </div>
              
            </form>
          
          
          </div>
        );
    }
}

export default SignInForm;