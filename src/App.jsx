import './assets/css/index.css'
import HandleGame from './components/HandleGame';
import AreaGame from './components/AreaGame';
import { GameProvider } from './context/GameContext';

function App() {
  

  return (
    <GameProvider>
      <div className='game'>
        <div className="container">
          <div className="game__wrap">
            <HandleGame />
            <AreaGame />
          </div>
        </div>
      </div>
    </GameProvider>
  )
}

export default App
