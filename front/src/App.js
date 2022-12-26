import './app.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo netflix" />
      </div>
      <div className="login-container"></div>
      <div className="login">
        <h1>S'identifier</h1>
        <form action="#">
          <input type="text" placeholder="E-mail ou numéro de téléphone" />
          <input type="text" placeholder="Mot de passe" />
          <input type="submit" value="S'identifier" />
        </form>
      </div>
    </header>
  );
}

export default App;
