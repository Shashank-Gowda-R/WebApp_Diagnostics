import mentalHealth from './pages/mentalHealth';
import diagnostic from './pages/diagnostic';
import Header from './Header';

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