import React, {createContext, useState, useContext} from 'react';

const authContext = createContext();

function useAuth() {

    const [authed, setAuthed] = useState();

    return {
        authed,
        setAuthed,
        login(data) {
            return new Promise((res) => {
                setAuthed(data);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(null);
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