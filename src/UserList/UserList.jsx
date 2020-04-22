import React from 'react';
import User from './User/User';

const UserList = ({ users, deleteNeUser }) => {

    const deleteOneUser = (nameForDelete) => {
        deleteNeUser(nameForDelete);
    }

    return (
        <div className="list">
            {users.map((user) => {
                return (
                    <User name={user.name}  key={user.id} deleteOneUser={deleteOneUser}/>
                )
            })}
        </div>
    )

}

export default UserList;