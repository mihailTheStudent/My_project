import React from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import UserSearch from "./UserSearch/UserSearch";


const Header = ({setSearchValue}) => {
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
            <h2>
              Сотрудники(Создание)
            </h2>
            <button className="bm-1">Записать и закрыть</button>
            <button className="bm-2">Записать</button>
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
      <UserSearch setSearchValue={setSearchValue}/>
    </header>
  );
};

export default Header;
