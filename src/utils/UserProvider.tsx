import React, { useState, useContext, createContext, ReactNode } from "react";

import { User } from '../interfaces'

interface UserProviderProps {
  children: ReactNode;
}


const userContext = createContext<User | null>(null);
const userSetContext = createContext<React.Dispatch<
  React.SetStateAction<User | null>
> | null>(null);



export function useUserContext() {
  return useContext(userContext);
}

export function useUserSetContext() {
  return useContext(userSetContext);
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <userContext.Provider value={user}>
      <userSetContext.Provider value={setUser}>
        {children}
      </userSetContext.Provider>
    </userContext.Provider>
  );
}