import Logo from '../../img/Logo.svg';
import { Link } from 'react-router-dom';

export const Login = () => {
    return(
        <>
            <img src={Logo} alt='Kenzie Hub' />
            <form>
                <h3>Login</h3>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' placeholder='Digite o email'/>
                <label htmlFor='password'>Senha</label>
                <input type='password' name='password' placeholder='Digite a senha'/>
                <button type='submit'>Entrar</button>
                <span>Ainda não possui conta ?</span>
                <Link to={'/register'}>Cadastre-se</Link>
            </form>
        </>
    )
}