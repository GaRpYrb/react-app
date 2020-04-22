import React from 'react';
import Div from './CreateUserStyle';

const CreateUser = ({ addNewUser }) => {

    let newUser = {};

    const addUser = (event) => {
        newUser = {
            name: event.target.value,
            id: event.target.value.length,
        }
    }

    return (
        <Div>
            <input type="text" value={newUser.name} onChange={addUser}></input>
            <button onClick={() => addNewUser(newUser)}>Add</button>
        </Div>
    )
}

export default CreateUser;