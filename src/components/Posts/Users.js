import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const getUserEmail = () => {
  let userEmail = localStorage.getItem('user-email');
  if (userEmail) {
    return JSON.parse(localStorage.getItem('user-email'));
  } else {
    return [];
  }
};

const Users = ({ user, backUp, clearUser, removeUser }) => {
  const [userEmail, setUserEmail] = useState(getUserEmail());
  // const signOut = () => {
  //   localStorage.setItem('user-email', JSON.stringify([]));
  // };
  // useEffect(() => {
  //   signOut();
  //   // localStorage.setItem('user-email', JSON.stringify([]));
  // }, [backUp]);
  return (
    <section className='section-center-p'>
      {user.map((item) => {
        return (
          <div key={item.id}>
            {item.email === userEmail ? (
              <h3>Log in succesful, Welcome {item.name}</h3>
            ) : (
              ''
            )}
          </div>
        );
      })}

      <h4>User List:</h4>
      {user.map((item) => {
        const { id, name, email } = item;
        return (
          <article key={id} className='grocery-item-p'>
            <div className='title-p'>
              <h4>Username : {name}</h4>
              <h5>Email : {email}</h5>
            </div>
            {email === userEmail ? (
              <button
                type='button'
                className='delete-btn-l'
                onClick={(e) => removeUser(id)}
              >
                <FaTrash />
              </button>
            ) : (
              ''
            )}
          </article>
        );
      })}
      <button className='delete-btn-p' onClick={backUp}>
        Sign Out
      </button>
      <button className='clear-btn-p' onClick={clearUser}>
        Clear all users
      </button>
    </section>
  );
};
export default Users;
