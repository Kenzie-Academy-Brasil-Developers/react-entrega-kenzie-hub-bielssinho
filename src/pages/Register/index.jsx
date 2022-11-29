import { Link } from 'react-router-dom'
import Logo from '../../img/Logo.svg'
import { ContainerRegister } from '../../styles/container'
import { FormRegister } from './styles.js'

export const Register = () => {
    return(
        <ContainerRegister>
            <div>
                <img src={Logo} alt='Kenzie Hub' />
                <Link to={'/login'}>Voltar</Link>
            </div>
            <FormRegister>
                <h3>Crie sua conta</h3>
                <span>Rapido e grátis, vamos nessa</span>
                <label htmlFor='name'>Nome</label>
                <input type='text' name='name' placeholder='Digite aqui seu nome'/>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Digite aqui seu email'/>
                <label htmlFor='password'>Senha</label>
                <input type='password' name='name' placeholder='Digite aqui sua senha'/>
                <label htmlFor='confirmation'>Confirmar Senha</label>
                <input type='password' name='confirmation' placeholder='Digite novamente sua senha'/>
                <label htmlFor='bio'>Bio</label>
                <input type='text' name='bio' placeholder='Fale sobre você'/>
                <label htmlFor='contact'>Contato</label>
                <input type='text' name='contact' placeholder='Opção de contato'/>
                <label htmlFor='module'>Selecionar modulo</label>
                <select name='module'>
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
    )
}