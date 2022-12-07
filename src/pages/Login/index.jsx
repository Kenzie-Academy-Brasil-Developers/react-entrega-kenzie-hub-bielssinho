import Logo from '../../img/Logo.svg';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { ContainerLogin } from '../../styles/container';
import { FormLogin } from './styles.js';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorYup } from '../../components/yupError/yupError.js';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContext';

export const Login = () => {
    const { login } = useContext(AuthContext);

    const loginFormSchema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido!'),
        password: yup.string().required('Senha obrigatória')
    })


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormSchema)
    });

    

    return(
        <>
        <ContainerLogin>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <FormLogin onSubmit={handleSubmit(login)}>
                    <h3>Login</h3>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Digite o email'
                    {...register('email')}
                    />
                    {errors.email?.message && <ErrorYup>{errors.email.message}</ErrorYup>}
                    <label htmlFor='password'>Senha</label>
                    <input type='password' name='password' placeholder='Digite a senha' 
                    {...register('password')}
                    />
                    {errors.password?.message && <ErrorYup>{errors.password.message}</ErrorYup>}
                    <button type='submit'>Entrar</button>
                    <span>Ainda não possui conta ?</span>
                    <Link to={'/register'}>Cadastre-se</Link>
                </FormLogin>
            </div>
        </ContainerLogin>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        </>
    )
}