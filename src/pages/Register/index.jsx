import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.svg';
import { ContainerRegister } from '../../styles/container';
import { FormRegister } from './styles.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorYup } from '../../components/yupError/yupError.js';
import { useContext } from 'react';
import { UserContext } from '../../Providers/UserContext';

export const Register = () => {
    const { register, handleSubmit, errors, onSubmitRegister} = useContext(UserContext);
    
    return(
        <>
        <ContainerRegister>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <Link to={'/'}>Voltar</Link>
            </div>
            <FormRegister onSubmit={handleSubmit(onSubmitRegister)}>
                <h3>Crie sua conta</h3>
                <span>Rapido e grátis, vamos nessa</span>
                <label htmlFor='name'>Nome</label>
                <input type='text' name='name' placeholder='Digite aqui seu nome'
                {...register('name')}
                />
                {errors.name?.message && <ErrorYup>{errors.name.message}</ErrorYup>}
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Digite aqui seu email'
                {...register('email')}
                />
                {errors.email?.message && <ErrorYup>{errors.email.message}</ErrorYup>}
                <label htmlFor='password'>Senha</label>
                <input type='password' name='password' placeholder='Digite aqui sua senha'
                {...register('password')}
                />
                {errors.password?.message && <ErrorYup>{errors.password.message}</ErrorYup>}
                <label htmlFor='confirmPassword'>Confirmar Senha</label>
                <input type='password' name='confirmPassword' placeholder='Digite novamente sua senha'
                {...register('confirmPassword')}
                />
                {errors.confirmPassword?.message && <ErrorYup>{errors.confirmPassword.message}</ErrorYup>}
                <label htmlFor='bio'>Bio</label>
                <input type='text' name='bio' placeholder='Fale sobre você'
                {...register('bio')}
                />
                {errors.bio?.message && <ErrorYup>{errors.bio.message}</ErrorYup>}
                <label htmlFor='contact'>Contato</label>
                <input type='text' name='contact' placeholder='Opção de contato'
                {...register('contact')}
                />
                {errors.contact?.message && <ErrorYup>{errors.contact.message}</ErrorYup>}
                <label htmlFor='module'>Selecionar modulo</label>
                <select name='module' {...register('course_module')}>
                    <option value=''>Selecionar Módulo</option>
                    <option value='Primeiro Módulo'>Primeiro Módulo</option>
                    <option value='Segundo Módulo'>Segundo Módulo</option>
                    <option value='Terceiro Módulo'>Terceiro Módulo</option>
                    <option value='Quarto Módulo'>Quarto Módulo</option>
                    <option value='Quinto Módulo'>Quinto Módulo</option>
                    <option value='Sexto Módulo'>Sexto Módulo</option>
                </select>
                {errors.course_module?.message && <ErrorYup>{errors.course_module.message}</ErrorYup>}
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