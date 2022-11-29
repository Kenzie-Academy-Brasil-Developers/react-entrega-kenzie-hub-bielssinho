import Logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';
import { ContainerLogin } from '../../styles/container';
import { FormLogin } from './styles.js';

export const Login = () => {
    return(
        <ContainerLogin>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <FormLogin>
                    <h3>Login</h3>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Digite o email'/>
                    <label htmlFor='password'>Senha</label>
                    <input type='password' name='password' placeholder='Digite a senha'/>
                    <button type='submit'>Entrar</button>
                    <span>Ainda não possui conta ?</span>
                    <Link to={'/register'}>Cadastre-se</Link>
                </FormLogin>
            </div>
        </ContainerLogin>
    )
}