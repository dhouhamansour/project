import {axios} from "axios"
import * as Types from "./types"

export const register=(data,history)=> async(dispatch)=>{
try {
    const res= await axios.post("http: //localhost:5000/user/addUser",data)
    dispatch({
        type:Types.Register,
        payload: res.data,
    });
    history.push("/profile")
} catch (error) {
    dispatch({
        type: Types.Register_fail,
        payload: error,
    });
    
}
}

export const login=(data,history)=> async(dispatch)=>{
    try {
        const res= await axios.post("http: //localhost:5000/user/signin",data)
        dispatch({
            type:Types.Login,
            payload: res.data,
        });
        history.push("/profile")
    } catch (error) {
        dispatch({
            type: Types.Login_fail,
            payload: error,
        });
        
    }
    }
    

