import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardContext = createContext({});

export const DashboardProvider = ({children}) => {
    const [ modal, setModal ] = useState(false);

    const navigate = useNavigate()
   
    const logout = () => {
        window.localStorage.clear()

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