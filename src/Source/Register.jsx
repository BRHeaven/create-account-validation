import React from 'react'
import "../Css/Register.css"
export default function Register() {
  return (
    <section>
        <form action="" className=''>
            <div className="divInputName">
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="first name" name="first name" id='inputFirstName' required />
                    <label for="inputFirstName" className="form__label">first name</label>
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="last name" name="last name" id='inputLastName' required />
                    <label for="inputLastName" className="form__label">last name</label>
                </div>
            </div>
            <div className='divInputUserName'>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="user name" name="user name" id='inputUserName' required />
                    <label for="inputUserName" className="form__label">user name</label>
                </div>
            </div>
            <div className="divInputEmail">
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="email" name="email" id='inputEmail' required />
                    <label for="inputEmail" className="form__label">email</label>
                </div>
            </div>
            <div className="divInputPassword">
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="password" name="password" id='inputPassword' required />
                    <label for="inputPassword" className="form__label">password</label>
                </div>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="password confirm" name="password confirm" id='inputPasswordConfirm' required />
                    <label for="inputPasswordConfirm" className="form__label">password confirm</label>
                </div>
            </div>
            <div className="buttonConfirm">
                <div class="buttons-container">
                    <button class="button-arounder">confirm create</button>
                </div>
            </div>
        </form>
    </section>
  )
}
