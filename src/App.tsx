import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import UserList from './components/UserList';
import './App.scss';

const App: FunctionComponent = () => {  

  const [users, setUsers] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [sortByOrder, setSortByOrder] = useState<'asc' | 'desc'>('asc');
  const [sortByField, setSortByField] = useState<'name' | 'email'>('name');
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);


  //Filter user search input
  const FilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  //Sort asc or dec by name or email
  const SortByToggle = (field: 'name' | 'email') => {
    setSortByField(field);
    setSortByOrder(sortByOrder === 'asc' ? 'desc' : 'asc');
  };


  // Filtered and Sorted User List
  const filteredAndSortedUsersList = users
    .filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) || user.email.toLowerCase().includes(filter.toLowerCase()) ||
      user.phone.toLowerCase().includes(filter.toLowerCase()) || user.website.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      const filterSortA = a[sortByField].toLowerCase();
      const filterSortB = b[sortByField].toLowerCase();

      if (sortByOrder === 'asc') {
        return filterSortA > filterSortB ? 1 : -1;
      } else {
        return filterSortA < filterSortB ? 1 : -1;
      }
    });

  return (
    <div className="app">
      <div className="header">
        <input
          type="text"
          placeholder="Search users..."
          value={filter}
          onChange={FilterChange}
        />
        <div className="toggle-buttons">
          <button onClick={() => SortByToggle('name')}>Sort by Name</button>
          <button onClick={() => SortByToggle('email')}>Sort by Email</button>
        </div>
      </div>
      <UserList users={filteredAndSortedUsersList} />
    </div>
  );
}

export default App;
