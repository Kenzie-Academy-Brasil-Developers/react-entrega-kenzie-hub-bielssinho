import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup  from 'yup';
import Logo from '../../img/Logo.svg';
import { ContainerRegister } from '../../styles/container';
import { FormRegister } from './styles.js';
import { api } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    // const formSchema = yup.object().shape({
    //     name: yup.string().required('Nome obrigatório'),
    //     email: yup.string().required('E-mail obrigatório').email('E-maik inválido'),
    //     password: yup.string().required('Senha obrigatória'),
    //     bio: yup.string().required('Bio obrigatória'),
    //     contact: yup.string().required('Contato obrigatório'),
    //     course_module: yup.string().required('Campo obrigatório')
    // })
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        const response = await api.post('users', data)
        .then((response) => {
            if(response.statusText === 'Created'){
                toast.success('Conta criada!')
                setTimeout(() => {
                    navigate('/login')
                }, 3500)
            }
        })
        .catch((err) => toast.error('error'))

    }

    return(
        <>
        <ContainerRegister>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <Link to={'/login'}>Voltar</Link>
            </div>
            <FormRegister onSubmit={handleSubmit(onSubmit)}>
                <h3>Crie sua conta</h3>
                <span>Rapido e grátis, vamos nessa</span>
                <label htmlFor='name'>Nome</label>
                <input type='text' name='name' placeholder='Digite aqui seu nome'
                {...register('name')}
                />
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Digite aqui seu email'
                {...register('email')}
                />
                <label htmlFor='password'>Senha</label>
                <input type='password' name='password' placeholder='Digite aqui sua senha'
                {...register('password')}
                />
                <label htmlFor='confirmation'>Confirmar Senha</label>
                <input type='password' name='confirmation' placeholder='Digite novamente sua senha'
                {...register('password')}
                />
                <label htmlFor='bio'>Bio</label>
                <input type='text' name='bio' placeholder='Fale sobre você'
                {...register('bio')}
                />
                <label htmlFor='contact'>Contato</label>
                <input type='text' name='contact' placeholder='Opção de contato'
                {...register('contact')}
                />
                <label htmlFor='module'>Selecionar modulo</label>
                <select name='module' {...register('course_module')}>
                    <option value='Primeiro Módulo'>Primeiro Módulo</option>
                    <option value='Segundo Módulo'>Segundo Módulo</option>
                    <option value='Terceiro Módulo'>Terceiro Módulo</option>
                    <option value='Quarto Módulo'>Quarto Módulo</option>
                    <option value='Quinto Módulo'>Quinto Módulo</option>
                    <option value='Sexto Módulo'>Sexto Módulo</option>
                </select>
                <button type='submit'>Cadastrar</button>
            </FormRegister>
        </ContainerRegister>
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