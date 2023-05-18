import React from "react";

class Users extends React.Component {
    users = [
        {
            name: 'Иванов Пётр Сергеевич',
            id: '001',
            lastname: 'Иванов',
            firstname: 'Пётр',
            surname: 'Сергеевич',
            data: '01.05.1995',
            male: 'Мужской'
        },
        {
            name: 'Кискин Василий Арестотель',
            id: '002',
            lastname: 'Кискин',
            firstname: 'Василий',
            surname: 'Арестотель',
            data: '22.04.1941',
            male: 'Мужской'
        }
    ]
    render() {
        return( <div>
            {this.users.map((el) => {<div>
                <h3>{el.name} {el.id} {el.lastname} {el.firstname} {el.surname} {el.data} {el.male}</h3>
            </div>})}
        </div>
        )
    }
}

export default Users