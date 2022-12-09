import { useEffect, useRef } from 'react';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { BackgroundModal, BodyModal, HeaderModal } from './modalAdd';
import { ErrorYup } from '../yupError/yupError.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ModalAdd = ({ setModal }) => {
    const formSchema = yup.object().shape({
        title: yup.string().required('titulo da tecnologia obrigatório !'),
        status: yup.string().required('campo obrigatório!')
    })

    const { register: techs, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = async (data) => {
        const token = window.localStorage.getItem('@TOKEN');

        await api.post('users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => response)
        .catch(() => toast.error('Ops! Algo deu errado'))
        .finally(setModal(false))
    }

    const modalRef = useRef(null);

    useEffect(() => {
        function modalOutClick(event) {
            const target = event.target;

            const element = modalRef.current;

            if(!element.contains(target)){
                setModal(false);
            }
        }

        window.addEventListener('mousedown', modalOutClick);

        return () => {
            window.removeEventListener('mousedown', modalOutClick);
        }
    })

    
    return(
        <>
            <BackgroundModal>
                <form ref={modalRef} onSubmit={handleSubmit(onSubmit)}>
                    <HeaderModal>
                        <h5>Cadastrar Tecnologia</h5>
                        <button onClick={() => setModal(false)}>X</button>
                    </HeaderModal>
                    <BodyModal>
                        <label>
                            Nome
                            <input type='text' name='title' placeholder='Nome da tecnologia'{...techs('title')}/>
                        </label>
                        {errors.title?.message && <ErrorYup>{errors.title.message}</ErrorYup>}
                        <label>
                            Selecionar status
                            <select name='status' {...techs('status')}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediario">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </label>
                        {errors.status?.message && <ErrorYup>{errors.status.message}</ErrorYup>}
                        <button type='submit'>Cadastrar Tecnologia</button>
                    </BodyModal>
                </form>
            </BackgroundModal>
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