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
  );
}

export default UtilesEscolares;
