import React from 'react';
import { useEffect, useState } from 'react';
import User from '../../models/UserModel';
import './style.css';

function UserSearchBox() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) =>
          setUsers(
            data.filter((user: User) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
          )
        );
    } else {
      setUsers([]);
    }
  }, [search]);

  return (
    <div id='user-search-box'>
      <input
        type='text'
        placeholder='Search users...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='user-list'>
        {users &&
          users.map((user) => (
            <div className='user-item' key={user.id}>
              {user.name} - {user.address.street} - {user.phone}
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserSearchBox;
