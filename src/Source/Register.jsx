import React from 'react';
import "../Css/Register.css";
export default function Register() {
    let state = {
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        passwordConfirm:""
    };
    const handleChangeValue = (event) => {
        let {name,value} = event.target;
        return state[name] = value;
    };
  return (
    <section id='register'>
        <h3>create account</h3>
        <div className="registerContent">
            <form action="" className=''>
                <div className="divInputName">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="first name" name="firstName" id='inputFirstName' required
                        onChange={handleChangeValue}/>
                        <label htmlFor="inputFirstName" className="form__label">first name</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="last name" name="lastName" id='inputLastName' required 
                        onChange={handleChangeValue}/>
                        <label htmlFor="inputLastName" className="form__label">last name</label>
                    </div>
                </div>
                <div className='divInputUserName'>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="user name" name="userName" id='inputUserName' required 
                        onChange={handleChangeValue}/>
                        <label htmlFor="inputUserName" className="form__label">user name</label>
                    </div>
                </div>
                <div className="divInputEmail">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="email" name="email" id='inputEmail' required 
                        onChange={handleChangeValue}/>
                        <label htmlFor="inputEmail" className="form__label">email</label>
                    </div>
                </div>
                <div className="divInputPassword">
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="password" name="password" id='inputPassword' required 
                        onChange={handleChangeValue}/>
                        <label htmlFor="inputPassword" className="form__label">password</label>
                    </div>
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="passwordConfirm" name="password confirm" id='inputPasswordConfirm' required 
                        onChange={handleChangeValue}/>
                        <label htmlFor="inputPasswordConfirm" className="form__label">password confirm</label>
                    </div>
                </div>
                <div className="buttonConfirm">
                    <div className="buttons-container">
                        <button className="button-arounder">confirm create</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
  );
};