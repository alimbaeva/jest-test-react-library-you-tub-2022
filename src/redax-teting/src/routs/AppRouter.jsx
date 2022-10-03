import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Main from '../pages/Main';
import Error from '../pages/Error';
import Users from '../users/Users'
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRouter = () => {
    return (
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<UserDetailsPage />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    )
};

export default AppRouter;
