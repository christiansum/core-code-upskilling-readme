import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
    const [userInfo, setUserInfo] = useState({});

    async function getUsers() {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + Math.floor(Math.random() * 10 + 1)
        );
        setUserInfo(await response.json());
    }

    const resetUsers = async () => { getUsers(); };

    useEffect(() => { getUsers(); }, []);

    return (
        <div className="App">
            <p><button name="reset" value="Reset" onClick={resetUsers}>Reset</button></p>
            <h1>User Data</h1>
            <p><label>Name : </label>{userInfo.name}</p>
            <p><label>Website : </label>{userInfo.website}</p>
            <p><label>Email : </label>{userInfo.email}</p>
            <p><label>Phone : </label>{userInfo.phone}</p>
        </div>
    );
}