import logo from './logo.svg';
import './App.css';
import Header from "./layouts/Header/Header"
import Main from "./layouts/Main/Main"
import Footer from "./layouts/Footer/Footer"
import { useState } from 'react';

function App() {

    const [loggedInUser, setLoggedInUser] = useState({name: "name", password: "1234"});
    const [allUsers, setAllUsers] = useState([]);
    const [tasks, setTasks] = useState([]);

    function hLogin(credentials) {
        //check login credentials
        //setLogged in user
    }

    return (
        <div className="App">
            <Header user={loggedInUser}/>
            <Main hLogin={hLogin} tasks={tasks} allUsers={allUsers}/>
            <Footer/>
        </div>
    );
}

export default App;
