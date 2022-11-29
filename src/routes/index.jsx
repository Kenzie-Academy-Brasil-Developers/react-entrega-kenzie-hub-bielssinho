import { Routes, Route } from 'react-router-dom';
import { DivNotFound } from '../components/NotFound/notfound';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/login' index element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard/:name' element={<Dashboard/>}/>
            <Route path='*' element={<DivNotFound>404 NOT FOUND</DivNotFound>}/>
        </Routes>
    )
}