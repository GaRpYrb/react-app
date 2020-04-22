import React, { useState } from 'react';
import Edit from './Edit/Edit';
import Default from './Default/Default';
import Div from './UserStyle';

const User = ({ name, deleteOneUser }) => {

    let [userName, editUserName] = useState(name);
    let [isEdit, editMode] = useState(false);

    const updateUser = (mode) => {
        editMode(mode);
    }

    const editUserNewName = (userNewName) => {
        editUserName(userNewName);
        editMode(false);
    }

    const deleteUser = (nameforDelete) => {
        deleteOneUser(nameforDelete);
    }

    return (
        <Div className="user">
            {!isEdit ? 
            <Default name={userName} updateUser={updateUser} deleteUser={deleteUser}/> : 
            <Edit name={userName} editUserName={editUserNewName}/>}
        </Div>
    )
}

export default User;