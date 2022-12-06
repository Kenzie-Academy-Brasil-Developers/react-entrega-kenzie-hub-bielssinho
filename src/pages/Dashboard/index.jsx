import Logo from '../../img/Logo.svg';
import { MdAddBox } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { StyledHeader, StyledInfo, StyledTec } from './styles.js';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { ModalAdd } from '../../components/ModalAdd';


export const Dashboard = () => {
    const [infoUser, setInfoUser] = useState([]);
    const [ modal, setModal ] = useState(false);

    const id = JSON.parse(localStorage.getItem('@USERID'));
    
    const navigate = useNavigate()

    useEffect(() => {
        async function getInfoUser(){
            try{
                const response = await api.get(`users/${id}`);
                
                setInfoUser(response.data);
            }catch(err){
                navigate('*')
            }
        }

        getInfoUser();
    }, [infoUser]);

   
    const logout = () => {
        window.localStorage.clear()

        navigate('/');
    }

    const openModal = () => {
        setModal(true);
    }

    return(
        <>
            <StyledHeader>
                <div>
                    <img src={Logo} alt="Kenzie Hub" />
                    <button onClick={logout}>Sair</button>
                </div>
            </StyledHeader>
            <StyledInfo>
                <div>
                    <h2>Olá, {infoUser.name}</h2>
                    <span>{infoUser.course_module}</span>
                </div>
            </StyledInfo>
            <StyledTec>
                <div>
                    <h3>Tecnologias</h3>
                    <MdAddBox onClick={openModal} className='add'/>
                </div>
                <ul>
                    {
                        infoUser.techs?.map(tech => {
                            return(
                                <li key={tech.id}>
                                    <h4>{tech.title}</h4>
                                    <div>
                                        <span>{tech.status}</span>
                                        <RiDeleteBinLine className='delete'/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </StyledTec>
            {
                modal && (<ModalAdd setModal={setModal}/>)
            }
        </>
    )
}