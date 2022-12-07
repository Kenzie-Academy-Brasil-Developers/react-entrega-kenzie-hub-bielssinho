import { Routes, Route } from 'react-router-dom';
import { DivNotFound } from '../components/NotFound/notfound';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { DashboardProvider } from '../Providers/DashboardContext';
import { UserProvider } from '../Providers/UserContext';

export const RoutesMain = () => {
    return(
        <Routes>
            <Route index path='/'  element={<Login/>}/>
            <Route path='/register' element={<UserProvider><Register/></UserProvider>}/>
            <Route path='/dashboard/:name' element={<DashboardProvider><Dashboard/></DashboardProvider>}/>
            <Route path='*' element={<DivNotFound>404 NOT FOUND</DivNotFound>}/>
        </Routes>
    )
}