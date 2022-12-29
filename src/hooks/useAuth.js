import React, { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';


const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    //setUser('login');
    const options = {
        Headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const { data:acces_token } = await axios.post(endPoints.auth.login, {email, password}, options);
    console.log(acces_token);
  };
  return {
    user,
    signIn,
  };
}
