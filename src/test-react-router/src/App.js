import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Error from './pages/Error';
import Users from './users/Users'
import UserDetailsPage from './pages/UserDetailsPage';

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>Main</Link>
      <Link to='/about' data-testid='about-link'>About</Link>
      <Link to='/users' data-testid='users-link'>Users</Link>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<UserDetailsPage />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </div>
  );
}

// part-1
// function App() {
//   return (
//     <BrowserRouter>
//       <Link to='/' data-testid='main-link'>Main</Link>
//       <Link to='/about' data-testid='about-link'>About</Link>
//       <Routes>
//         <Route path='/' element={<Main />}/>
//         <Route path='/about' element={<About />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
