import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from '../services/api.js';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('@TOKEN');

            if(!token){
                setLoading(false);
                return;
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const { data } = await api.get('profile', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setUser(data)
                navigate(`/dashboard/${data.user.name}`);
            } catch (error) {
                navigate('/'); 
                localStorage.clear();               
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
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            const toNavigate = location.state?.from?.pathname || `/dashboard/${response.data.user.name}`

            navigate(toNavigate, { replace: true });
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