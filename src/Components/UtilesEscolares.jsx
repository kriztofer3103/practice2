import React from "react";
import { Table } from "reactstrap";

function UtilesEscolares(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.cuaderno}</td>
        <td>{props.lapiz}</td>
        <td>{props.mochila}</td>
        <td>{props.tempera}</td>
      </tr>
    </tbody>

    /*     <table className="utiles-escolares">
      <tbody>
        <tr>
          <td>{props.id + "-->"}</td>
          <td>{props.cuaderno + "-->"}</td>
          <td>{props.lapiz + "-->"}</td>
          <td>{props.mochila + "-->"}</td>
          <td>{props.tempera}</td>
        </tr>
      </tbody>
    </table> */
  );
}

export default UtilesEscolares;
