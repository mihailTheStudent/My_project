import React from "react";

function Row(props) {
  return (
    <tr>
      <td>
        <div>
          <button onClick={( )=> {props.deleteRow(props.code)}}></button>
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
