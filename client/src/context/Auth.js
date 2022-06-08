import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const authContext = createContext();

function AuthContext(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    async function getLogged(){
        const loggedResponse = await axios.get("http://localhost:3001/api/user/loggedIn");
        setLoggedIn(loggedResponse.data)
    }

    useEffect(()=>{
        getLogged();
    }, [])

    return (
        <authContext.Provider value={{loggedIn, getLogged}}>
            {props.children}
        </authContext.Provider>
    )
}

export default authContext;
export { AuthContext };