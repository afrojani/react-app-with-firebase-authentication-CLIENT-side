import React from 'react';
import { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = { displayName: 'ani' };

    const providerSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = { user, providerSignIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;