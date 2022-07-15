import './App.css';
import { GameContainer } from './components/gameContainer/index.jsx';
import { Header } from './components/header/index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <GameContainer />
    </div>
  );
}

export default App;
