import React, { FC } from 'react';
import UserDetails from './UserDetails';
import styles from '../styles/UserList.module.scss';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
