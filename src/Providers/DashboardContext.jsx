import { useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
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

    const deleteTech = async (id) => {
        try {
            await api.delete(`users/techs/${id}`);
        } catch (error) {
            toast.error('Ops! Algo deu errado')
        }
    }

    return(
        <DashboardContext.Provider value={ { modal, logout, openModal, setModal, deleteTech }}>
            {children}
        </DashboardContext.Provider>
    )
}