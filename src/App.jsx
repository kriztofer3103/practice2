import Utiles from "./Components/UtilesEscolares";
import "./App.css";
import Data from "./Json/Data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          AQUI COMENZAREMOS CON LA 2DA PRÁCTICA DE REACT EN VITE{" "}
        </div>{" "}
        <br />
        <div className="lista-utiles">
          <h2 className="subtitle">--LISTA DE UTILES ESCOLARES--</h2>
          <table>
            <tbody>
              <tr>
                <td>ID{"-->"}</td>
                <td>CUADERNOS{"-------->"}</td>
                <td>LAPIZ{"-------->"}</td>
                <td>MOCHILA{"-------->"}</td>
                <td>TEMPERA</td>
              </tr>
            </tbody>
          </table>
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
        </div>
      </header>
    </div>
  );
}

export default App;
