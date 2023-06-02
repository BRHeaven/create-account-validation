/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import { handleChangeValue } from "../Types/registerTypes";
const stateRegister = {
    object : {
        value : {
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
            passwordConfirm:""
        },
        error : {
            errorFristName:"",
            errorLastName:"",
            errorUserName:"",
            errorEmail:"",
            errorPassword:"",
            errorPasswordConfirm:""
        },
    },
};
const reducerRegister = ( state = stateRegister, action ) => {
    if ( action.type === handleChangeValue ) {
    }
    return {...state};
};
export default reducerRegister;