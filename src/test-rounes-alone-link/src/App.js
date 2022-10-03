import { Link } from 'react-router-dom';
import AppRouter from './routs/AppRouter';

function App() {
  return (
    <div>
      <Link to='/' data-testid='main-link'>Main</Link>
      <Link to='/about' data-testid='about-link'>About</Link>
      <Link to='/users' data-testid='users-link'>Users</Link>
      <AppRouter />
    </div>
  );
}

export default App;
