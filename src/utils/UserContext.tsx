import React, { ReactNode, createContext, useContext, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
