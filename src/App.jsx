 
import { Routes ,Route} from 'react-router-dom';
import './css/App.css'
import Home from './pages/Home';
import Favorites from './pages/favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
 

function App() {
  const url="http://www.omdbapi.com/?apikey=da33d8b6&"

  return (
   <MovieProvider>
   <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favorites" element={<Favorites/>}></Route>
    </Routes>
   </main>
   </MovieProvider>
  );
}

export default App
