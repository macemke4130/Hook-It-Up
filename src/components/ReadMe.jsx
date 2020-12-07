import React from 'react';

const ReadMe = () => {
    return (
        <>
            <div id="container">
                <h1 className="site-user-header">Hook It Up!</h1>
                <div className="read-me">
                    <h3>The purpose of this lab is to accommodate you with the React Hooks API available
                    in versions 16.8 and higher, to continue practice interacting and displaying information
                from an API, and to show off how up-to-date you are with React!</h3>
                <hr></hr>
                    <h2>Setup</h2>
                    <ul>
                        <li>Create a new project with create-react-app</li>
                        <li>Delete the src and public directories</li>
                        <li>Create a new public directory with an index.html inside</li>
                        <li>Make a basic html document using the ! emmet command</li>
                        <li>Make sure it has one div with any id value you want (root is commonly used)</li>
                        <li>Create a new src directory with an index.js inside</li>
                        <li>Code the entry point for your entire in this file (just like what is initially generated)</li>
                    </ul>
                    <hr></hr>
                    <h2>Building a WebApp</h2>
                    <ul>
                        <li>Design Constraint: Only utilize useState and useEffect hooks, and code your webapp without using any class based components!!!</li>
                        <li>Use https://jsonplaceholder.typicode.com/ as a default REST API, or find your own for this lab if you're adventurous. ;)</li>
                        <li>Build a webapp using react-router-dom to have two routes
                        '/' the home route which will show a component with a preview list of all the objects in the endpoint of your choosing
'/:id/details' the details route which will show a component specialized in showing all the information for that object's id</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ReadMe;