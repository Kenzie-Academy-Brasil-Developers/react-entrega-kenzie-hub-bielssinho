import { createContext } from "react";
import { useForm } from 'react-hook-form';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api.js';
import {  toast } from 'react-toastify';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const registerFormSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório').min(3, 'O nome deve conter mais de 3 caracteres').max(200, 'O nome deve conter menos de 200 caracteres'),
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha obrigatória'),
        confirmPasssword: yup.string().oneOf([yup.ref('password'), null, 'As senhas precisam ser iguais!']).required('Campo obrigatório'),
        bio: yup.string().required('Bio obrigatória'),
        contact: yup.string().required('Contato obrigatório'),
        course_module: yup.string().required('Campo obrigatório')
    })

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerFormSchema)
    });

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
        .catch(() => toast.error('Ops! Algo deu errado'))

    }

    const loginFormSchema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido!'),
        password: yup.string().required('Senha obrigatória')
    })

    const { register: login, handleSubmit: handleSubmitLogin, formState: { errorsLogin } } = useForm({
        resolver: yupResolver(loginFormSchema)
    });
    
    const onSubmitLogin = async (data) => {

        await api.post('sessions', data)
        .then((response) => {
            
            if(response.statusText !== 'Bad Request'){
                window.localStorage.setItem('@TOKEN',JSON.stringify(response.data.token))
                window.localStorage.setItem('@USERID', JSON.stringify(response.data.user.id))

                navigate(`/dashboard/${response.data.user.name}`);
            }
        })
        .catch(() => toast.error('Ops! Algo deu errado'))
    }

    return (
        <UserContext.Provider value={{ register, handleSubmit, errors, onSubmitRegister, login, handleSubmitLogin, errorsLogin, onSubmitLogin }} >
            { children }
        </UserContext.Provider>
    )
}