import Header from './Components/Header';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AuthState from './Context/AuthState';
import MoviePage from './Pages/MoviePage';
import Error from './Pages/Error';

function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/movie/:id' element={<MoviePage />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </AuthState>
    </BrowserRouter>
  );
}

export default App;
