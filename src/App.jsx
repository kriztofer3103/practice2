import Utiles from "./Components/UtilesEscolares";
import "./App.css";
import Data from "./Json/Data.json";
import { Table } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          AQUI COMENZAREMOS CON LA 2DA PRÁCTICA DE REACT EN VITE{" "}
        </div>{" "}
        <br />
        <div className="lista-utiles">
          <h2 className="subtitle">LISTA DE UTILES ESCOLARES</h2>
          <br />
          <Table dark bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>CUADERNO</th>
                <th>LAPIZ</th>
                <th>MOCHILA</th>
                <th>TEMPERA</th>
              </tr>
            </thead>
            {Data.map((utiles) => {
              return (
                <Utiles
                  key={utiles.id}
                  id={utiles.id}
                  cuaderno={utiles.cuaderno}
                  lapiz={utiles.lapiz}
                  mochila={utiles.mochila}
                  tempera={utiles.tempera}
                ></Utiles>
              );
            })}
          </Table>
        </div>
      </header>
    </div>
  );
}

export default App;
