import { Header } from "../../components/Header/index";
import background from "../../assets/background.svg";

import "../Home/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background " />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
