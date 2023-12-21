import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './routes/index'; // Importe o componente da nova página
import Download from './routes/download';

import Header from './components/Header';

function App() {
  //document.title = "Agenda Patrus - Download"

  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Index} />
      </Routes>
    </Router>
  );
}

export default App;