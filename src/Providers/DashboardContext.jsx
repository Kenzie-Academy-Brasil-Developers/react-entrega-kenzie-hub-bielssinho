import { useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const DashboardContext = createContext({});

export const DashboardProvider = ({children}) => {
    const{ setUser } = useContext(AuthContext)
    const [ modal, setModal ] = useState(false);

    const navigate = useNavigate()
   
    const logout = () => {
        window.localStorage.clear()
        setUser(null);
        navigate('/');
    }

    const openModal = () => {
        setModal(true);
    }

    return(
        <DashboardContext.Provider value={ { modal, logout, openModal, setModal }}>
            {children}
        </DashboardContext.Provider>
    )
}