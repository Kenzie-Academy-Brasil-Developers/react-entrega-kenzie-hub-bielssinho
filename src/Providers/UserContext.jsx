import { createContext } from "react";
import { api } from '../services/api.js';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    const onSubmitRegister = async (data) => {
        delete data.confirmPasssword
        await api.post('users', data)
        .then((response) => {
            if(response.statusText === 'Created'){
                toast.success('Conta criada com sucesso!')
                setTimeout(() => {
                    navigate('/')
                }, 3500)
            }
        })
        .catch(() => toast.error('Ops! Algo deu errado') )
    }
    
    return (
        <UserContext.Provider value={{ onSubmitRegister }} >
            { children }
        </UserContext.Provider>
    )
}