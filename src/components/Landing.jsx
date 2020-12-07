import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

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
        <div id="container">
            {users.map(user => (
                <Link to={"Person/" + user.id} className="site-user-btn"key={user.id}>{user.name}</Link>
            ))}
        </div>

    );
}

export default Landing;