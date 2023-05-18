import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import Users from "./Modal/Users";
import UserTable from "./Table/Table";
import Header from "./Components/Header";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="app">
      <Header></Header>
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        +
      </button>

      <UserTable></UserTable>
      <Modal open={open} setOpen={setOpen}>
        <form>
          <div>
            <p>Сотрудники(Создание)</p>
            <button>Записать и закрыть</button>
            <button>Записать</button>
          </div>

          <label>
            Код:
            <input type="text" id="id" />
          </label>

          <label>
            Наименование:
            <input type="text" name="name" />
          </label>

          <label>
            Фамилия:
            <input type="text" last name="last name" />
          </label>

          <label>
            Имя:
            <input type="text" name="name" />
          </label>

          <label>
            Отчество:
            <input type="text" surname="surname" />
          </label>

          <label>
            Дата рождения:
            <input type="text" date of birth="date of birth" />
          </label>

          <label>
            Пол:
            <input type="text" male="male" />
          </label>
        </form>
      </Modal>
    </div>
  );
}

export default App;
