import React from 'react';
import "../Css/Register.css";
export default function Register() {
  return (
    <section id='register'>
        <h3>create account</h3>
        <div className="registerContent">
            <form action="" className=''>
                <div className="divInputName">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="first name" name="first name" id='inputFirstName' required />
                        <label htmlFor="inputFirstName" className="form__label">first name</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="last name" name="last name" id='inputLastName' required />
                        <label htmlFor="inputLastName" className="form__label">last name</label>
                    </div>
                </div>
                <div className='divInputUserName'>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="user name" name="user name" id='inputUserName' required />
                        <label htmlFor="inputUserName" className="form__label">user name</label>
                    </div>
                </div>
                <div className="divInputEmail">
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="email" name="email" id='inputEmail' required />
                        <label htmlFor="inputEmail" className="form__label">email</label>
                    </div>
                </div>
                <div className="divInputPassword">
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="password" name="password" id='inputPassword' required />
                        <label htmlFor="inputPassword" className="form__label">password</label>
                    </div>
                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="password confirm" name="password confirm" id='inputPasswordConfirm' required />
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