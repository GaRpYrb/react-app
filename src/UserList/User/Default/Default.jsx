import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa'
import Div from './DefaultStyle';

const Default = ({ name, updateUser, deleteUser }) => {

    return (
        <Div>
            <div>{name}</div>
            <div className="icons">
                <div className="edit" onClick={() => updateUser(true)}><FaEdit /></div>
                <div className="delete" onClick={() => deleteUser(name)}><MdDelete /></div>
            </div>
        </Div>
    )
}

export default Default;