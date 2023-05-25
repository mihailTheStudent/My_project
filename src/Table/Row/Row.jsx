import React from "react";
import "./Row.css";

function Row(props) {
  return (
    <tr className="row">
      <td>
        <div>
          <button
            className="buttonRow"
            onClick={() => {
              props.deleteRow(props.code);
            }}
          ></button>
          {props.fullName}
        </div>
      </td>
      <td>{props.code}</td>
      <td>{props.surname}</td>
      <td>{props.name}</td>
      <td>{props.patronymic}</td>
      <td>{props.birthday}</td>
      <td>{props.sex}</td>
    </tr>
  );
};

export default Row;
