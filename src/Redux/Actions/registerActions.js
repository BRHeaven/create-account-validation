import { handleChangeValue } from "../Types/registerTypes";

export const handleChange = (name,value) => {
    return {
        type : handleChangeValue,
        name,
        value
    };
};