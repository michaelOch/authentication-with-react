import React, {createContext, useState, useContext} from 'react';

const authContext = createContext();

function useAuth() {

    const [auth, setAuth] = useState();
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);

    return {
        auth,
        setAuth,
        persist,
        setPersist,
        login(data) {
            return new Promise((res) => {
                setAuth(data);
                res();
            });
        }
    }
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer() {

    return useContext(authContext);
}