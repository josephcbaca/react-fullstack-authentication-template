import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar"

function Home({ loggedIn, currentUser }) {

    if (!loggedIn) return (<p className="black-headings"> Please log in before browsing games! <Link className="link-text" to="/login">Login</Link>
    </p>);
    return (<div>
        <Navbar loggedIn={loggedIn} />
        <div className="container">
        <h3>This is the Home Page.</h3>
        </div>
    </div>);
}


export default Home;