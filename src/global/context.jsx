import { useState, createContext, useContext, useReducer } from "react";
import reducer from './reducer';

const UserContext = createContext();

const initialState = {
    userData: {},
    token: "",
    loginStatus: false,
}



const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const setUser = (userdata) => {
        console.log("Reducer got the User Data: ", userdata)
        localStorage.setItem("user", JSON.stringify(userdata));
        return dispatch({
            type: "SET_USER",
            payload: {
                userData: userdata,
                loginStatus: true,
            },
        })
    }

    const removeUser = () => {
        localStorage.removeItem("user");
        return dispatch({
            type: "SET_USER",
            payload: {
                userData: {},
                loginStatus: false,
            },
        })
    }

    const setToken = (token) => {
        console.log("Reducer got the Token: ", token);
        localStorage.setItem("token", token);
        return dispatch({
            type: "SET_TOKEN",
            payload: {
                token: token,
            },
        })
    }

    const removeToken = () => {
        localStorage.removeItem("token");
        return dispatch({
            type: "SET_TOKEN",
            payload: {
                token: "",
            },
        })
    }

    const isLoggedIn = () => {
        return state.loginStatus;
    }

    return <UserContext.Provider value={{ ...state, setUser, setToken, removeToken, removeUser, isLoggedIn }}>
        {children}
    </UserContext.Provider>
}

//Global custom hook
const useGlobalContext = () => {
    return useContext(UserContext);
}

export { UserContext, UserProvider, useGlobalContext };