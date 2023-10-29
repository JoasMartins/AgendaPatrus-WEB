import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../pages/index'; // Importe o componente da nova página
import Download from '../pages/download';

function App() {
  //document.title = "Agenda Patrus - Download"

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/download" component={Download} />
      </Switch>
    </Router>
  );
}

export default App;