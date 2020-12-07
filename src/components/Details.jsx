import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Details = () => {

    // [Naming the Array, Function call to update State] --
    const [person, setPerson] = useState([]);
    const { id } = useParams();

    const getUser = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        let person = await res.json();
        setPerson(person);
    }

    // Empty [] is used to prevent an infinate Render loop --
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div id="container">
                <h2 key={person.id} className="site-user-btn">{person.name}</h2>
        </div>
    );
}

export default Details;