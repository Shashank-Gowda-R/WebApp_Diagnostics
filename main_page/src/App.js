import './App.css';
import Header from './pages/Header';
import mentalHealth from './pages/MentalHealth';
import diagnostic from './pages/Diagnostic';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Header
      break
    case "/mentalHealth":
      Component = mentalHealth
      break
    case "/diagnostic":
      Component = diagnostic
      break
  }
  return (
    < Component />
  );
}

export default App;
