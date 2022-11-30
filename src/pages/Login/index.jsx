import Logo from '../../img/Logo.svg';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerLogin } from '../../styles/container';
import { FormLogin } from './styles.js';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorYup } from '../../components/yupError/yupError.js';

export const Login = () => {
    const loginFormSchema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido!'),
        password: yup.string().required('Senha obrigatória')
    })


    const { register: login, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const response = await api.post('sessions', data)
        .then((response) => {
            
            if(response.statusText !== 'Bad Request'){
                window.localStorage.setItem('@TOKEN',JSON.stringify(response.data.token))
                window.localStorage.setItem('@USERID', JSON.stringify(response.data.user.id))

                navigate(`/dashboard/${response.data.user.name}`);
            }
        })
        .catch((err) => toast.error('Ops! Algo deu errado'))
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
                    {errors.email?.message && <ErrorYup>{errors.email.message}</ErrorYup>}
                    <label htmlFor='password'>Senha</label>
                    <input type='password' name='password' placeholder='Digite a senha' 
                    {...login('password')}
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