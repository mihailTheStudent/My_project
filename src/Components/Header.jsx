import React from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import Search from "./Search/Search";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header>
      <h1 className="header">Cписок сотрудников</h1>
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        +
      </button>
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
      <Search />
    </header>
  );
};

export default Header;
