import React, { Component } from 'react'
import "../Css/Register.css";
export default class Register extends Component {
    state = {
        value : {
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
            passwordConfirm:""
        },
        error : {
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
            passwordConfirm:""
        },
    }
    handleChangeValue = (event) => {
        let {name,value, type} = event.target;
        let newValue = {...this.state.value,[name]:value};
        let newError = {...this.state.error};
        if ( value.trim() === '' ) {
            newError[name] = name + " is required !";
        } else {
            newError[name] = '';
        };
        if (type === "email") {
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regex.test(value)) {
                newError[name] = "Please enter your email";
            } else {
                newError[name] = '';
            };
        };
        if (name === "passwordConfirm") {
            if (value === newValue.password) {
                newError.passwordConfirm = "";
            } else {
                newError.passwordConfirm = "wrong password !";
            }
        };
        this.setState({
            value : newValue,
            error : newError
        });
    };
    notification = () => {
        let updateStateValue = this.state.value;
        let updateStateError = this.state.error;
        if (updateStateValue.firstName === '') {
            updateStateError.firstName = "do not leave blank !";
        };
        if (updateStateValue.lastName === '') {
            updateStateError.lastName = "do not leave blank !";
        };
        if (updateStateValue.userName === '') {
            updateStateError.userName = "do not leave blank !";
        };
        if (updateStateValue.email === '') {
            updateStateError.email = "do not leave blank !";
        };
        if (updateStateValue.password === '') {
            updateStateError.password = "do not leave blank !";
        };
        if (updateStateValue.passwordConfirm === '') {
            updateStateError.passwordConfirm = "do not leave blank !";
        };
        this.setState({error : updateStateError});
        if (updateStateValue.firstName !== "" && updateStateValue.firstName !== "") {
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regex.test(updateStateValue.email)) {
                updateStateError.email = "Please enter your email";
            } else {
                if (updateStateValue.userName !== "" && updateStateValue.email !== "") {
                    if (updateStateValue.password !== "" && updateStateValue.passwordConfirm !== "" && updateStateValue.password === updateStateValue.passwordConfirm) {
                        return alert("success account");
                    };
                };
            }
        };
    };
  render() {
    return (
        <section id='register'>
        <h3>create account</h3>
        <div className="registerContent">
            <form action="" className=''>
                <div className="divInputName">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="first name" name="firstName" id='inputFirstName' required
                        onChange={this.handleChangeValue} value={this.state.value.firstName}/>
                        <label htmlFor="inputFirstName" className="form__label">first name</label>
                        <span className='notification'>{this.state.error.firstName}</span>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="last name" name="lastName" id='inputLastName' required 
                        onChange={this.handleChangeValue} value={this.state.value.lastName}/>
                        <label htmlFor="inputLastName" className="form__label">last name</label>
                        <span className='notification'>{this.state.error.lastName}</span>
                    </div>
                </div>
                <div className='divInputUserName'>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="user name" name="userName" id='inputUserName' required 
                        onChange={this.handleChangeValue} value={this.state.value.userName}/>
                        <label htmlFor="inputUserName" className="form__label">user name</label>
                        <span className='notification'>{this.state.error.userName}</span>
                    </div>
                </div>
                <div className="divInputEmail">
                    <div className="form__group field">
                        <input type="email" className="form__field" placeholder="email" name="email" id='inputEmail' required 
                        onChange={this.handleChangeValue} value={this.state.value.email}/>
                        <label htmlFor="inputEmail" className="form__label">email</label>
                        <span className='notification'>{this.state.error.email}</span>
                    </div>
                </div>
                <div className="divInputPassword">
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="password" name="password" id='inputPassword' required 
                        onChange={this.handleChangeValue} value={this.state.value.password}/>
                        <label htmlFor="inputPassword" className="form__label">password</label>
                        <span className='notification'>{this.state.error.password}</span>
                    </div>
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="passwordConfirm" name="passwordConfirm" id='inputPasswordConfirm' required 
                        onChange={this.handleChangeValue} value={this.state.value.passwordConfirm}/>
                        <label htmlFor="inputPasswordConfirm" className="form__label">password confirm</label>
                        <span className='notification'>{this.state.error.passwordConfirm}</span>
                    </div>
                </div>
                <div className="buttonConfirm">
                    <div className="buttons-container">
                        <button className="button-arounder" onClick={()=> {this.notification()}}>confirm create</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    );
  };
};
