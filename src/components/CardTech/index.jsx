import { useContext } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { DashboardContext } from '../../Providers/DashboardContext';
import { StyledCardTech } from './styles';

export const CardTech = ({ tech }) => {
    const { deleteTech } = useContext(DashboardContext);

    return(
        <StyledCardTech key={tech.id}>
            <h4>{tech.title}</h4>
            <div>
                <span>{tech.status}</span>
                <RiDeleteBinLine onClick={() => deleteTech(tech.id)} className='delete'/>
            </div>
        </StyledCardTech>
    )
}