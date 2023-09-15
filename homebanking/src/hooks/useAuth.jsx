import React, { createContext, useState, useContext, useMemo } from "react";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  const value = useMemo(() => (auth), [auth.isLogged]);
  return (
    <authContext.Provider value={value}>
      {useMemo(
        () => (
          <>{children}</>
        ),
        []
      )}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [isLogged, setIsLogged] = useState(false);

  //Si el usuarioes válido, toma el valor de true
  function signIn() {
    setIsLogged(true);
  }

  //Si el usuario se desloguea, se pone en false
  const signOut = () => {
    setIsLogged(false);
    console.log(isLogged);
  };

  return {
    isLogged,
    setIsLogged,
    signIn,
    signOut,
  };
}
