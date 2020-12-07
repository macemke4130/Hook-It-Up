import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Details = () => {

    // [Naming the Array, Function call to update State] --
    const [person, setPerson] = useState([]);
    const { id } = useParams();

    const getUser = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        let person = await res.json();
        setPerson(person)

    }

    // Empty [] is used to prevent an infinite Render loop --
    useEffect(() => {
        getUser();
    }, []);

    // Was getting an error where the person.address and person.company
    // sub info was not loading quickly enough and the app would break.
    // This is a quick fix --
    if (person.address === undefined) {
        return (
            <div id="container">
                <h1 className="site-user-header">Loading...</h1>
            </div>
        )
    } else {
        return (
            <div id="container">
                <h1 key={person.id} className="site-user-header">{person.name}</h1>
                <h2>Username: <a href="#">@{person.username}</a></h2>
                <h2>Email Address: <a href="#">{person.email}</a></h2>

                <p className="small-details">

                    <h3>Street Address: {person.address.street} {person.address.suite}</h3>
                    <h3>City: {person.address.city}</h3>
                    <h3>Zipcode: {person.address.zipcode}</h3>
                    <h3>Latitude: {person.address.geo.lat} Longitude: {person.address.geo.lng}</h3>
                </p>
                <h2>Phone: {person.phone}</h2>
                <h2>Website: <a href="#">{person.website}</a></h2>

                <p className="small-details">

                    <h3>Company: {person.company.name}</h3>
                    <h3>Catch Phrase: "{person.company.catchPhrase}"</h3>
                    <h3>BS: "{person.company.bs}"</h3>
                </p>
            </div>
        );
    }
}

export default Details;