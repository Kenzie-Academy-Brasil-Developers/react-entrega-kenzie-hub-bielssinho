import Logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
import { ContainerLogin } from '../../styles/container';
import { FormLogin } from './styles.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorYup } from '../../components/yupError/yupError.js';
import { useContext } from 'react';
import { UserContext } from '../../Providers/UserContext';


export const Login = () => {
    const {  login, handleSubmitLogin, errorsLogin, onSubmitLogin } = useContext(UserContext);
    return(
        <>
        <ContainerLogin>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <FormLogin onSubmit={handleSubmitLogin(onSubmitLogin)}>
                    <h3>Login</h3>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Digite o email'
                    {...login('email')}
                    />
                    {errorsLogin.email?.message && <ErrorYup>{errorsLogin.email.message}</ErrorYup>}
                    <label htmlFor='password'>Senha</label>
                    <input type='password' name='password' placeholder='Digite a senha' 
                    {...login('password')}
                    />
                    {errorsLogin.password?.message && <ErrorYup>{errorsLogin.password.message}</ErrorYup>}
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