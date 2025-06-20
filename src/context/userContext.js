// src/context/UserContext.js
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const token = localStorage.getItem('token');

        if (storedUsername && token) {
            setUsername(storedUsername);
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <UserContext.Provider value={{ username, setUsername, isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};
