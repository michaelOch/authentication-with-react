import React, {createContext, useState, useContext} from 'react';

const authContext = createContext();

function useAuth() {

    const [auth, setAuth] = useState();

    return {
        auth,
        setAuth,
        login(data) {
            return new Promise((res) => {
                setAuth(data);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuth(null);
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