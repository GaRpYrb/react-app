import React, { useState } from 'react';
import Div from './EditStyle';
import { MdClear } from 'react-icons/md'
import { FcCheckmark } from 'react-icons/fc'

const Edit = ({ name, editUserName }) => {
    let [newName, editUser] = useState(name);

    const edit = (event) => {
        newName = event.target.value;
        editUser(newName);
    }

    return (
        <Div>
            <input type="text" value={newName} onChange={edit}></input>
            <div className="icons">
                <FcCheckmark onClick={() => editUserName(newName)} />
                <MdClear onClick={() => editUserName(name)} />
            </div>
        </Div>
    )

}

export default Edit;