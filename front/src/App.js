import './app.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo netflix" />
      </div>
      <div className="login-container"></div>
    </header>
  );
}

export default App;
