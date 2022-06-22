import React from "react";

function UtilesEscolares(props) {
  return (
    <table className="utiles-escolares">
      <tbody>
        <tr>
          <td>{props.id + "-->"}</td>
          <td>{props.cuaderno + "-->"}</td>
          <td>{props.lapiz + "-->"}</td>
          <td>{props.mochila + "-->"}</td>
          <td>{props.tempera}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UtilesEscolares;
