import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>Main</Link>
      <Link to='/about' data-testid='about-link'>About</Link>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<About />}/>
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
