import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";

//implementation of the CONTEXT to allow to share this DATA trought the entire application

//#region this UserContextType is like an interface that is going to provide externally the methods and attributes to be consumed
type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, username:string, password:string) => void;
    loginUser: (username: string, password: string ) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};
//#endregion

type Props = {children: React.ReactNode};// it's required to add the children in the Props of this component(UserProvider) in the CONTEXT when we are using childrens components in React FE solution

//Creation of the global context to share data between components using Provider Pattern (Observable)
const UserContext = createContext<UserContextType>({} as UserContextType);//the createContext in React with Typescript force us to use a type "as UserCont..."


export const UserProvider = ({children}: Props) => {//the UserProvider is the component that should share the data in the components this should be priority in the components order in the App.tsx
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        }
        setIsReady(true);
    }, [])

    const registerUser = async (
        email: string,
        username: string,
        password: string
        ) => {
        await registerAPI(email, username, password).then((objResponse) => {
            if (objResponse) {
                localStorage.setItem("token", objResponse?.data.token);
                const userObj = {
                    username: objResponse?.data.userName,
                    email: objResponse?.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(objResponse?.data.token!);
                setUser(userObj!);
                toast.success("Register Success!");
                navigate("/search")
            }
        }).catch(e => toast.warning("Server error occured."))
    }

    const loginUser = async (
        username: string,
        password: string
        ) => {
        await loginAPI(username, password).then((objResponse) => {
            if (objResponse) {
                localStorage.setItem("token", objResponse?.data.token);
                const userObj = {
                    username: objResponse?.data.userName,
                    email: objResponse?.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(objResponse?.data.token!);
                setUser(userObj!);
                toast.success("Login Success!");
                navigate("/search")
            }
        }).catch(e => toast.warning("Server error occured."))
    }


    const isLoggedIn = () => {
        return !!user;
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    }
    //the UserContext.Provider define the data that will be able globally in this case loginUser, user, token, etc
    return (
        <UserContext.Provider value={{loginUser, user, token, logout, isLoggedIn, registerUser}}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const useAuth = () => React.useContext(UserContext);//Allow us to use the context with all the attributes and functions that we put in the props implementing just the useAuth()