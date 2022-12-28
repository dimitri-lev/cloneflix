import './app.css';
import logo from './assets/img/logo.png';

function App() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="logo netflix" />
        </div>
        <div className="login-container">
          <div className="login">
            <h1>S'identifier</h1>
            <form action="#">
              <input type="text" placeholder="E-mail ou numéro de téléphone" />
              <input type="text" placeholder="Mot de passe" />
              <input type="submit" value="S'identifier" />
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Se souvenir de moi</label>
              <a href="test">Besoin d'aide ?</a>
            </form>
          </div>
          <div className="sign">
            <h2>
              Première visite sur Netflix ? <a href="test">Inscrivez-vous</a>
            </h2>
            <p>
              Cette page est protégée par Google reCAPTCHA pour nous assurer que
              vous n'êtes pas un robot. <a href="test">En savoir plus.</a>
            </p>
          </div>
        </div>
      </header>
      <footer>
        <h3>
          Des questions ? appelez le <a href="test">(+33) 085-543-063</a>
        </h3>
        <ul>
          <li>
            <a href="test">FAQ</a>
          </li>
          <li>
            <a href="test">Centre d'aide</a>
          </li>
          <li>
            <a href="test">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="test">Confidentialité</a>
          </li>
          <li>
            <a href="test">Préférences de cookies</a>
          </li>
          <li>
            <a href="test">Mentions légales</a>
          </li>
        </ul>
        <button>Français</button>
      </footer>
    </div>
  );
}

export default App;
