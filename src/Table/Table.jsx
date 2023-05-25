import React from "react";
import Row from "./Row/Row";
import "./Table.css";

const users = [
  {
    fullName: "Иванов Пётр Сергеевич",
    code: "001",
    surname: "Иванов",
    name: "Пётр",
    patronymic: "Сергеевич",
    birthday: "01.05.1995",
    sex: "Мужской",
  },
  {
    fullName: "Кискин Василий Арестотель",
    code: "002",
    surname: "Кискин",
    name: "Василий",
    patronymic: "Арестотель",
    birthday: "22.04.1941",
    sex: "Мужской",
  },
];

function UserTable(props) {
  const [usersArray, setUsers] = React.useState(users);
  const deleteRow = (code) => {
    let newUsers = usersArray.filter((user) => user.code != code);
    setUsers(newUsers);
  };
  console.log(props.searchValue)

  function addUser(user) {
    let newUsers = usersArray;
    newUsers.push(user);
    setUsers(newUsers);
  }

  let someVar = [];
  for (let i = 0; i < usersArray.length; i++) {
    if(users[i].fullName.toLowerCase().includes(props.searchValue.toLowerCase())) {

    
    someVar.push(
      <Row
        fullName={users[i].fullName}
        code={users[i].code}
        surname={users[i].surname}
        name={users[i].name}
        patronymic={users[i].patronymic}
        birthday={users[i].birthday}
        sex={users[i].sex}
        deleteRow={deleteRow}
        key={i}
      >
        {" "}
      </Row>
    );
   };
  };
  return (
    <table className="table contanier">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Код</th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Дата рождения</th>
          <th>Пол</th>
        </tr>
      </thead>
      <tbody>{someVar}</tbody>
    </table>
  );
}

export default UserTable;
