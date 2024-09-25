import { FC } from 'react';
import styles from '../styles/UserCard.module.scss';

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

interface UserCardProps {
  user: User;
}

const UserDetails: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.userCard}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
    </div>
  );
};

export default UserDetails;
