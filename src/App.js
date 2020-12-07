import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';

const App = () => {

    // [Naming the Array, Function call to update State] --
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    // Empty [] is used to prevent an infinate Render loop --
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Nav />
            <div id="container">
                {users.map(user => (
                    <h2 key={user.id} className="site-user">{user.name}</h2>
                ))}
            </div>
        </>
    );
}

export default App;