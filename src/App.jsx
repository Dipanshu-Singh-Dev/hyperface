import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Player from './Pages/Player';
import Home from './Pages/Home';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/player" element={<Player />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
