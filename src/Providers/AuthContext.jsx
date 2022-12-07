import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../services/api.js';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('@TOKEN');

            if(!token){
                setLoading(false);
                return;
            }

            try {
                const { data } = await api.get('profile', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setUser(data)

            } catch (error) {
                navigate('*');                
            }finally{
                setLoading(false);
            }
        }

        loadUser()
    }, [user]);

    async function login(data){
        try {
            const response = await api.post('sessions', data);

            const { token, user: userResponse } = response.data;

            setUser(userResponse);
            localStorage.setItem('@TOKEN', token);
            localStorage.setItem('@USERID', JSON.stringify(userResponse.id));

            navigate(`/dashboard/${response.data.user.name}`);
        } catch (error) {
            toast.error('Ops! Algo deu errado')
        }
    }
    
    return(
        <AuthContext.Provider value={ { login, user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}