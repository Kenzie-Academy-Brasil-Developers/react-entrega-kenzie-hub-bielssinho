import Logo from '../../img/Logo.svg';
import { MdAddBox } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { StyledHeader, StyledInfo, StyledTec } from './styles.js';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ModalAdd } from '../../components/ModalAdd';
import { AuthContext } from '../../Providers/AuthContext';
import { DashboardContext } from '../../Providers/DashboardContext';
import { CardTech } from '../../components/CardTech';


export const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const { modal, logout, openModal, setModal, deleteTech } = useContext(DashboardContext);
    
    if(loading){
        return null;
    }

    return user ? 
    <>
            <StyledHeader>
                <div>
                    <img src={Logo} alt="Kenzie Hub" />
                    <button onClick={logout}>Sair</button>
                </div>
            </StyledHeader>
            <StyledInfo>
                <div>
                    <h2>Olá, {user.name}</h2>
                    <span>{user.course_module}</span>
                </div>
            </StyledInfo>
            <StyledTec>
                <div>
                    <h3>Tecnologias</h3>
                    <MdAddBox onClick={openModal} className='add'/>
                </div>
                <ul>
                    {
                        user.techs?.map(tech => <CardTech tech={tech} />)
                    }
                </ul>
            </StyledTec>
            {
                modal && (<ModalAdd setModal={setModal}/>)
            }
    </>
    :
    <Navigate to='/'/>
}