import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { GameContainer } from './components/gameContainer/index.jsx';
import { Header } from './components/header/index.jsx';
import Layout from './pages/layout.jsx';
import { BrowserRouter } from 'react-router-dom';
import Game from './pages/game.jsx'
import { SignUp } from './pages/signUp.jsx';
import { Login } from './pages/login.jsx';
import { Leaderboard } from './pages/leaderboard.jsx';
import { Home } from './pages/home.jsx'
import { FindGamesPage } from './pages/findGames.jsx'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/game" element={<Game />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/find-games" element={<FindGamesPage />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

// поделить роуты на public & private (проверка по айди)

//создаю uid, но как следить за ним, в какой странице использовать useState