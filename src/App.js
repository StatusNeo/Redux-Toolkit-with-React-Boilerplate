import logo from './logo.svg';
import './App.css';
import Example from 'container/Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example />
      </header>
    </div>
  );
}

export default App;
