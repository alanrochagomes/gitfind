import { Header } from "../../components/Header/index";
import background from "../../assets/background.svg";
import ItemList from "../../components/ItemList";

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
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/141082245?v=4"
              className="profile"
              alt="image de perfil"
            />
            <div>
              <h3>Alan Rocha</h3>
              <span>@alanrochagomes</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste1" description="teste" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
