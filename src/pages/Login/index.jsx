import Logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
import { ContainerLogin } from '../../styles/container';
import { FormLogin } from './styles.js';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const { register: login, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        const response = await api.post('sessions', data)
        .then((response) => console.log(response))
        .catch((err) => toast.error('Algo deu errado!'))
    }

    return(
        <>
        <ContainerLogin>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <FormLogin onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login</h3>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Digite o email'
                    {...login('email')}
                    />
                    <label htmlFor='password'>Senha</label>
                    <input type='password' name='password' placeholder='Digite a senha' 
                    {...login('password')}
                    />
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