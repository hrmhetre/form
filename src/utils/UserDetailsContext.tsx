import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  details: UserDetailsData | null;
  setDetails: (details: UserDetailsData | null) => void;
}

interface UserDetailsData {
  phoneNumber: string;
  address: string;
  desigination: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserDetailsProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const [details, setDetails] = useState<UserDetailsData | null>(null);

  return (
    <UserContext.Provider value={{ details, setDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserDetailsContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
